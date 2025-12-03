# Assets Directory

Place your project assets here:

- **`images/`** — PNG, JPG, SVG images, logos, etc.
- **`icons/`** — Icon files (SVG, PNG)
- **`fonts/`** — Custom font files (WOFF, TTF, etc.)

## Import examples:

```tsx
// Images
import logo from '@/assets/images/logo.png'

// In JSX
<img src={logo} alt="Logo" />

// Icons (if using SVG)
import { ReactComponent as MyIcon } from '@/assets/icons/my-icon.svg'
```
