import path from "path";

import { CreateWebpackConfigArgs } from "gatsby";
import { CompilerOptions } from "typescript";

import { compilerOptions } from "../../tsconfig.json";

const onCreateWebpackConfig = (
  (options: Pick<CompilerOptions, "paths">) =>
  ({ actions }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        alias: Object.entries(options.paths || []).reduce(
          (aliases, [name, [target]]) => ({
            ...aliases,
            [name]: path.resolve(target),
          }),
          {},
        ),
      },
      devtool: false, // Disable source maps to fix SourceMapConsumer error
      optimization: {
        minimize: false, // Disable minification to avoid Parcel optimizer issues
      },
    });
  }
)(compilerOptions);

export { onCreateWebpackConfig };
