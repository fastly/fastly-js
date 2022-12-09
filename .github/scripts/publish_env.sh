# Parse the release tag

# strip leading 'release/'
TAG="${RELEASE_TAG#release/}"

# strip leading v
TAG_VALUE="${TAG#v}"

# detect trailing -dry
VERSION="${TAG_VALUE%-dry}"
DRY_RUN=0
if [ "${TAG_VALUE}" != "${VERSION}" ]; then
    DRY_RUN=1
fi

# publish tag ('alpha', 'beta', etc.) is
PUBLISH_TAG="$(npx -y semver-parser-cli@latest "${VERSION}" --field preid)"
if [ "${PUBLISH_TAG}" == "undefined" ]; then
  PUBLISH_TAG=latest
fi

echo "VERSION=${VERSION}"
echo "DRY_RUN=${DRY_RUN}"
echo "PUBLISH_TAG=${PUBLISH_TAG}"
echo "PACKAGE_FILENAME=fastly-${VERSION}.tgz"
