# CLAUDE.md

## Task

Update the portfolio with the following changes:

### Do NOT Touch
- Hero section
- About section
- Header

Keep their existing UI, content, styling, and structure unchanged, do not use round edges anywhere, and layout will be alternative black and white like existing

### Changes Allowed


#### Skills
- Update the Skills section only.
- Group skills by category.
- Display skills as simple chips as in stashed code.
- Chips must NOT be animated.
- Keep the existing code structure simple.

#### Education & Certifications
- Add Education and Certifications sections.
- Use the stashed file as the visual/content reference.
- Follow the current project's existing component and code structure.
- Keep the implementation simple.
- Avoid unnecessary components, abstractions, or complexity.

## Structure Conventions

- Every section lives in `src/sections/<Name>Section/` and has two files:
  - `<Name>Section.tsx` — markup and logic only.
  - `<Name>Section.styled.ts` — all of that section's `sx` objects, exported as
    `<Name>SectionStyles` (named + default export).
- Keep `sx` out of the `.tsx`: define it in the styled file and reference it, e.g.
  `sx={certCss.card}`. Styles that vary can be a function, e.g. `sx={expCss.role(isFirst, hasNext)}`.
- Shared cross-section styles (`SectionWrapper`, `sectionTitle`, `sectionContainer`)
  live in `src/styles/styles.ts` — reuse them instead of re-declaring per section.
- Section content comes from JSON in `src/config/data/`, typed in `src/types/`.

## Rules

- Do not modify sections outside the requested scope.
- Reuse existing styles/components where possible.
- Do not introduce new frameworks or dependencies.
- Keep the code clean, minimal, and consistent with the current project.
- Do not over-engineer the implementation.