# Results in dist folder

### fail__include-function-that-returns-custom-type.ts:
Original:
```typescript
import {create} from 'my-awesome-lib';

export const num = create<number>(5);
```
.d.ts file:
```javascript
export declare const num: import("../../dist/my-awesome-lib/function-that-returns-a-custom-type").Creator<number>;
```

### success__include-function-and-custom-type.ts:
Original:
```typescript
import {create, Creator} from 'my-awesome-lib';

export const numero: Creator<number> = create<number>(5);
```
.d.ts file:
```javascript
import { Creator } from 'my-awesome-lib';
export declare const numero: Creator<number>;
```

### success__include-function-that-returns-basic-type.d.ts:
original:
```typescript
import {functionThatReturnsABasicType} from 'my-awesome-lib';

export const x = functionThatReturnsABasicType();
```
.d.ts file:
```javascript
export declare const x: string;
```
