
## Shared brand submodule

`brand/` pins the public [ronansat-brand repository](https://github.com/RONAN-SAT/ronansat-brand). Normal development/build commands initialize it automatically. Local favicon paths link directly to its assets; there are no copied controllers or sibling checkout dependencies. Production uses the shared brand Worker. Update the submodule pointer to receive brand changes locally; the brand repository owns generation and deployment.
