#!/bin/bash
# ============================================
# DESIGN SYSTEM VALIDATOR - SitePlus
# ============================================
# Checks for hardcoded colors, missing responsive prefixes,
# and other design system violations.
#
# Usage: ./scripts/validate-design-system.sh
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
ERRORS=0
WARNINGS=0

echo ""
echo "============================================"
echo "  DESIGN SYSTEM VALIDATOR - SitePlus v1.0"
echo "============================================"
echo ""

# ============================================
# 1. CHECK FOR HARDCODED COLORS
# ============================================
echo -e "${BLUE}[1/4] Checking for hardcoded colors...${NC}"

# Patterns to find hardcoded colors (excluding app.css which defines them)
HARDCODED_HEX=$(grep -rn --include="*.astro" --include="*.tsx" --include="*.jsx" \
  -E "(#[0-9a-fA-F]{3,8}|text-\[#|bg-\[#|border-\[#|fill-\[#|stroke-\[#)" src/ 2>/dev/null | \
  grep -v "app.css" | grep -v "node_modules" || true)

HARDCODED_RGB=$(grep -rn --include="*.astro" --include="*.tsx" --include="*.jsx" \
  -E "rgb\([0-9]+[, ]+[0-9]+[, ]+[0-9]+\)" src/ 2>/dev/null | \
  grep -v "app.css" | grep -v "CustomStyles.astro" | grep -v "node_modules" || true)

if [ -n "$HARDCODED_HEX" ] || [ -n "$HARDCODED_RGB" ]; then
  echo -e "${RED}  ERRORS: Hardcoded colors found!${NC}"
  if [ -n "$HARDCODED_HEX" ]; then
    echo "$HARDCODED_HEX" | while read -r line; do
      echo -e "    ${RED}✗${NC} $line"
      ((ERRORS++)) || true
    done
  fi
  if [ -n "$HARDCODED_RGB" ]; then
    echo "$HARDCODED_RGB" | while read -r line; do
      echo -e "    ${RED}✗${NC} $line"
      ((ERRORS++)) || true
    done
  fi
  echo ""
  echo -e "  ${YELLOW}FIX: Use design tokens instead:${NC}"
  echo "    text-primary, bg-secondary, border-accent, etc."
  echo "    Or CSS variables: var(--color-primary), var(--color-secondary)"
else
  echo -e "${GREEN}  ✓ No hardcoded colors found${NC}"
fi
echo ""

# ============================================
# 2. CHECK FOR MISSING RESPONSIVE PREFIXES
# ============================================
echo -e "${BLUE}[2/4] Checking for missing responsive prefixes...${NC}"

# Find grid-cols without responsive prefix (potential issues)
GRID_WITHOUT_RESPONSIVE=$(grep -rn --include="*.astro" --include="*.tsx" \
  -E "class[=:].*['\"][^'\"]*grid-cols-[2-6][^'\"]*['\"]" src/ 2>/dev/null | \
  grep -v "md:grid-cols\|lg:grid-cols\|sm:grid-cols\|xl:grid-cols" | \
  grep -v "node_modules" || true)

if [ -n "$GRID_WITHOUT_RESPONSIVE" ]; then
  echo -e "${YELLOW}  WARNINGS: Grid layouts without responsive prefix:${NC}"
  echo "$GRID_WITHOUT_RESPONSIVE" | while read -r line; do
    echo -e "    ${YELLOW}!${NC} $line"
    ((WARNINGS++)) || true
  done
  echo ""
  echo -e "  ${YELLOW}FIX: Add responsive prefix (mobile-first):${NC}"
  echo "    grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
else
  echo -e "${GREEN}  ✓ Grid layouts look good${NC}"
fi
echo ""

# ============================================
# 3. CHECK FOR HARDCODED FONT SIZES
# ============================================
echo -e "${BLUE}[3/4] Checking for hardcoded font sizes...${NC}"

HARDCODED_FONTSIZE=$(grep -rn --include="*.astro" --include="*.tsx" \
  -E "text-\[[0-9]+px\]|font-size:[0-9]+px" src/ 2>/dev/null | \
  grep -v "node_modules" || true)

if [ -n "$HARDCODED_FONTSIZE" ]; then
  echo -e "${YELLOW}  WARNINGS: Hardcoded font sizes found:${NC}"
  echo "$HARDCODED_FONTSIZE" | while read -r line; do
    echo -e "    ${YELLOW}!${NC} $line"
    ((WARNINGS++)) || true
  done
  echo ""
  echo -e "  ${YELLOW}FIX: Use Tailwind text classes:${NC}"
  echo "    text-sm, text-base, text-lg, text-xl, text-2xl, etc."
else
  echo -e "${GREEN}  ✓ No hardcoded font sizes found${NC}"
fi
echo ""

# ============================================
# 4. CHECK FOR INLINE STYLES
# ============================================
echo -e "${BLUE}[4/4] Checking for inline styles...${NC}"

INLINE_STYLES=$(grep -rn --include="*.astro" --include="*.tsx" \
  -E "style=\"[^\"]*color:|style=\"[^\"]*background:" src/ 2>/dev/null | \
  grep -v "node_modules" || true)

if [ -n "$INLINE_STYLES" ]; then
  echo -e "${YELLOW}  WARNINGS: Inline color/background styles found:${NC}"
  echo "$INLINE_STYLES" | head -10 | while read -r line; do
    echo -e "    ${YELLOW}!${NC} $line"
    ((WARNINGS++)) || true
  done
  echo ""
  echo -e "  ${YELLOW}FIX: Use Tailwind classes or CSS variables${NC}"
else
  echo -e "${GREEN}  ✓ No problematic inline styles found${NC}"
fi
echo ""

# ============================================
# SUMMARY
# ============================================
echo "============================================"
if [ $ERRORS -gt 0 ]; then
  echo -e "${RED}  VALIDATION FAILED${NC}"
  echo -e "  Errors: $ERRORS | Warnings: $WARNINGS"
  echo "============================================"
  exit 1
else
  if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}  VALIDATION PASSED WITH WARNINGS${NC}"
    echo -e "  Warnings: $WARNINGS"
  else
    echo -e "${GREEN}  ✓ VALIDATION PASSED${NC}"
    echo "  No issues found!"
  fi
  echo "============================================"
  exit 0
fi
