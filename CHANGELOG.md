# Changelog

## [v3.3.0](https://github.com/fastly/fastly-js/releases/tag/release/v3.3.0) (2023-04-05)

**Bug fixes:**

- fix(purge): avoid encodeURIComponent with x-allow-reserved

**Enhancements:**

- feat(domain-ownership): list API endpoint
- feat(object-store): items API endpoints
- feat(object-store): add 'location' property to 'create_store'
- feat(object-store): add 'force' property to 'delete_store'
- feat(realtime): additional DDoS properties

**Documentation:**

- docs(acl-entries): document batch updating

## [v3.2.0](https://github.com/fastly/fastly-js/releases/tag/release/v3.2.0) (2023-03-21)

## Bug fixes

- fix(purge): switch authentication type to 'token'

## Enhancements

- feat(events): implement 'filter_created_at' property
- feat(mutual-authentication): implement 'include' property
- feat(object-store): implement new Object Store API endpoints
- feat(settings): implement Service Settings 'update' endpoint

## Documentation

- docs(backend): keepalive_time
- docs(pop): region, shield, latitude, longitude
- docs(product-enablement): brotli_compression
- docs(resource): terminology
- docs(results): fanout properties
- docs(tls/subscriptions): new 'failed' state

## [v3.0.0](https://github.com/fastly/fastly-js/releases/tag/v3.0.0) (2022-12-15)

**Breaking:**

* New interface from code-generated API client [#43](https://github.com/fastly/fastly-js/pull/10) 
  * [Blog post: Better Fastly API clients with OpenAPI Generator](https://dev.to/fastly/better-fastly-api-clients-with-openapi-generator-3lno)
  * [Documentation](https://github.com/fastly/fastly-js#documentation-for-api-endpoints)
  * [Unsupported API endpoints](https://github.com/fastly/fastly-js#issues)
