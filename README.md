# Bl-model
A library containing the classes needed for the boklisten ecosystem.

## Requires
  Typescript 2+ 
    
Read more about [typescript](www.typescriptlang.com)

## Installation

This module can easily be installed by running `npm install` (or the shorthand `npm i`)

```bash
npm i @wizardcoder/bl-model
```
## Usage

Every class can now be used by importing it into your project and classes.

Example usage:

```typescript
import { Branch, CustomerItem } from "@wizardcoder/bl-model";

class SampleClass {

  branch: Branch;
  customerItem: CustomerItem;

  public printBranchName() {
    console.log(this.branch.name);
  }
}
```

