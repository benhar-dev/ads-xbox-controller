declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Activates a recipe (writes all values)
             * @param ctx An object holding functions for success and error.
             * @param recipeReference Name of the recipe (could be prefixed with a path if separated with:: )
             */
            function ActivateRecipe(ctx: Required<TcHmi.Context>, recipeReference: string): void;
        }
    }
}
//# sourceMappingURL=ActivateRecipe.d.ts.map