# install deps
yarn

# mark version
yarn version --new-version "${VERSION}" --no-git-tag-version

# make a package (output is current directory)
yarn pack

# save the output filename to env
PACKAGE_FILENAME=$(ls -1 -- fastly-*.tgz)
echo "PACKAGE_FILENAME=${PACKAGE_FILENAME}" >> "${GITHUB_ENV}"

# move package to dist
mkdir -p "${GITHUB_WORKSPACE}/dist"
mv "${PACKAGE_FILENAME}" "${GITHUB_WORKSPACE}/dist/${PACKAGE_FILENAME}"
