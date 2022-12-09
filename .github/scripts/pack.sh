# install deps
yarn

# mark version
yarn version --new-version "${VERSION}" --no-git-tag-version

# make a package
mkdir "${GITHUB_WORKSPACE}/dist"
yarn pack --filename "${GITHUB_WORKSPACE}/dist/${PACKAGE_FILENAME}"
