echo "Publishing ${PROJECT_NAME} to ${PACKAGE_REPO_NAME}"
echo " Publishing version: ${VERSION}"
echo " Publish tag is ${PUBLISH_TAG}"

# perform publish
if [ "${DRY_RUN}" == "1" ]; then
  echo "(dry run)"
else
  yarn publish --tag "${PUBLISH_TAG}"
fi
