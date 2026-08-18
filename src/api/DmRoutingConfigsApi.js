/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DraftDiff from '../model/DraftDiff';
import DraftUpdate from '../model/DraftUpdate';
import PathCreate from '../model/PathCreate';
import PathResponse from '../model/PathResponse';
import PathUpdate from '../model/PathUpdate';
import PathsResponse from '../model/PathsResponse';
import RoutingConfig from '../model/RoutingConfig';
import RoutingConfigResponse from '../model/RoutingConfigResponse';
import RoutingConfigVersionResponse from '../model/RoutingConfigVersionResponse';
import RoutingConfigsResponse from '../model/RoutingConfigsResponse';
import RuleCreate from '../model/RuleCreate';
import RuleResponse from '../model/RuleResponse';
import RuleUpdate from '../model/RuleUpdate';
import RulesResponse from '../model/RulesResponse';
import VersionsResponse from '../model/VersionsResponse';

/**
* DmRoutingConfigs service.
* @module api/DmRoutingConfigsApi
* @version 16.1.0
*/
export default class DmRoutingConfigsApi {

    /**
    * Constructs a new DmRoutingConfigsApi. 
    * @alias module:api/DmRoutingConfigsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Activate the current draft version. The previously active version, if any, becomes inactive but is retained in version history.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigVersionResponse} and HTTP response
     */
    activateDmRoutingConfigDraftWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoutingConfigVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/activate', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Activate the current draft version. The previously active version, if any, becomes inactive but is retained in version history.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigVersionResponse}
     */
    activateDmRoutingConfigDraft(options = {}) {
      return this.activateDmRoutingConfigDraftWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new routing config. An optional `initial_version` may be provided to seed the config with paths and rules in a single request, and may also be activated immediately.
     * @param {Object} options
     * @param {module:model/RoutingConfig} [options.routing_config]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigResponse} and HTTP response
     */
    createDmRoutingConfigWithHttpInfo(options = {}) {
      let postBody = options['routing_config'];

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RoutingConfigResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new routing config. An optional `initial_version` may be provided to seed the config with paths and rules in a single request, and may also be activated immediately.
     * @param {Object} options
     * @param {module:model/RoutingConfig} [options.routing_config]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigResponse}
     */
    createDmRoutingConfig(options = {}) {
      return this.createDmRoutingConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add a new path to the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/PathCreate} [options.path_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PathResponse} and HTTP response
     */
    createDmRoutingConfigPathWithHttpInfo(options = {}) {
      let postBody = options['path_create'];
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add a new path to the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/PathCreate} [options.path_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PathResponse}
     */
    createDmRoutingConfigPath(options = {}) {
      return this.createDmRoutingConfigPathWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add a new rule to a path on the config's draft version. If no draft exists, one is created automatically by cloning the active version. A rule with an empty `conditions` array is a default (catch-all) rule and there can be at most one default rule per path.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/RuleCreate} [options.rule_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RuleResponse} and HTTP response
     */
    createDmRoutingConfigRuleWithHttpInfo(options = {}) {
      let postBody = options['rule_create'];
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RuleResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}/rules', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add a new rule to a path on the config's draft version. If no draft exists, one is created automatically by cloning the active version. A rule with an empty `conditions` array is a default (catch-all) rule and there can be at most one default rule per path.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/RuleCreate} [options.rule_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuleResponse}
     */
    createDmRoutingConfigRule(options = {}) {
      return this.createDmRoutingConfigRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Clear the active version designation. This is a bookkeeping operation only — it does not stop edge traffic. Minerva continues serving the last-activated version until the domain association is removed in Spotless. Only removing the routing config from the domain (via Spotless) triggers Neptune to drop the reference, which causes Minerva to stop fetching and eventually clean up the cached config. Idempotent: returns 200 even if already deactivated.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigResponse} and HTTP response
     */
    deactivateDmRoutingConfigWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoutingConfigResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/deactivate', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Clear the active version designation. This is a bookkeeping operation only — it does not stop edge traffic. Minerva continues serving the last-activated version until the domain association is removed in Spotless. Only removing the routing config from the domain (via Spotless) triggers Neptune to drop the reference, which causes Minerva to stop fetching and eventually clean up the cached config. Idempotent: returns 200 even if already deactivated.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigResponse}
     */
    deactivateDmRoutingConfig(options = {}) {
      return this.deactivateDmRoutingConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a routing config. By default, configs that have an active version cannot be deleted. Pass `force=true` to bypass the active-version check — this is destructive and will immediately stop traffic routing for any paths the config serves. The `force` parameter does **not** bypass the domain-association check; if domains are still associated, deletion is rejected with 409 regardless of `force`.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {Boolean} [options.force=false] - When `true`, allows deleting a routing config that has an active version. This is destructive — traffic routing for any paths served by the config will stop immediately.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDmRoutingConfigWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'force': options['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a routing config. By default, configs that have an active version cannot be deleted. Pass `force=true` to bypass the active-version check — this is destructive and will immediately stop traffic routing for any paths the config serves. The `force` parameter does **not** bypass the domain-association check; if domains are still associated, deletion is rejected with 409 regardless of `force`.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {Boolean} [options.force=false] - When `true`, allows deleting a routing config that has an active version. This is destructive — traffic routing for any paths served by the config will stop immediately.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDmRoutingConfig(options = {}) {
      return this.deleteDmRoutingConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete all inactive versions for a routing config. The currently active version, if any, is retained.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDmRoutingConfigInactiveVersionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/versions/inactive', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete all inactive versions for a routing config. The currently active version, if any, is retained.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDmRoutingConfigInactiveVersions(options = {}) {
      return this.deleteDmRoutingConfigInactiveVersionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a path from the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDmRoutingConfigPathWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a path from the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDmRoutingConfigPath(options = {}) {
      return this.deleteDmRoutingConfigPathWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a rule from the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDmRoutingConfigRuleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }
      // Verify the required parameter 'rule_id' is set.
      if (options['rule_id'] === undefined || options['rule_id'] === null) {
        throw new Error("Missing the required parameter 'rule_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id'],
        'rule_id': options['rule_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}/rules/{rule_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a rule from the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDmRoutingConfigRule(options = {}) {
      return this.deleteDmRoutingConfigRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the current draft version, reverting any unactivated changes.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    discardDmRoutingConfigDraftWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/draft', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete the current draft version, reverting any unactivated changes.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    discardDmRoutingConfigDraft(options = {}) {
      return this.discardDmRoutingConfigDraftWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single routing config by its identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigResponse} and HTTP response
     */
    getDmRoutingConfigWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoutingConfigResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single routing config by its identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigResponse}
     */
    getDmRoutingConfig(options = {}) {
      return this.getDmRoutingConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Compare the current draft version against the active version and return the paths and rules that have been added, modified, or deleted.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DraftDiff} and HTTP response
     */
    getDmRoutingConfigDraftDiffWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DraftDiff;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/draft/diff', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Compare the current draft version against the active version and return the paths and rules that have been added, modified, or deleted.
     * @param {Object} options
     * @param {String} options.config_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DraftDiff}
     */
    getDmRoutingConfigDraftDiff(options = {}) {
      return this.getDmRoutingConfigDraftDiffWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single path by its stable identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PathResponse} and HTTP response
     */
    getDmRoutingConfigPathWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PathResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single path by its stable identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PathResponse}
     */
    getDmRoutingConfigPath(options = {}) {
      return this.getDmRoutingConfigPathWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single rule by its stable identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RuleResponse} and HTTP response
     */
    getDmRoutingConfigRuleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }
      // Verify the required parameter 'rule_id' is set.
      if (options['rule_id'] === undefined || options['rule_id'] === null) {
        throw new Error("Missing the required parameter 'rule_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id'],
        'rule_id': options['rule_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}/rules/{rule_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single rule by its stable identifier.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuleResponse}
     */
    getDmRoutingConfigRule(options = {}) {
      return this.getDmRoutingConfigRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List paths for the config. Returns paths from the active version if one exists, otherwise from the draft.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} [options.path] - Filter results by path pattern. The match strategy is controlled by the `match` parameter.
     * @param {module:model/String} [options.match='exact'] - How to match the value of the `path` filter against existing path patterns. Has no effect unless `path` is also provided.
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PathsResponse} and HTTP response
     */
    listDmRoutingConfigPathsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'path': options['path'],
        'match': options['match'],
        'sort': options['sort'],
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PathsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List paths for the config. Returns paths from the active version if one exists, otherwise from the draft.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} [options.path] - Filter results by path pattern. The match strategy is controlled by the `match` parameter.
     * @param {module:model/String} [options.match='exact'] - How to match the value of the `path` filter against existing path patterns. Has no effect unless `path` is also provided.
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PathsResponse}
     */
    listDmRoutingConfigPaths(options = {}) {
      return this.listDmRoutingConfigPathsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all rules for a path in evaluation order.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/String} [options.sort='position'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RulesResponse} and HTTP response
     */
    listDmRoutingConfigRulesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'sort': options['sort'],
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RulesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}/rules', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all rules for a path in evaluation order.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/String} [options.sort='position'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RulesResponse}
     */
    listDmRoutingConfigRules(options = {}) {
      return this.listDmRoutingConfigRulesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all versions for a routing config.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/String} [options.sort='-activated_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VersionsResponse} and HTTP response
     */
    listDmRoutingConfigVersionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'sort': options['sort'],
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VersionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/versions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all versions for a routing config.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/String} [options.sort='-activated_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VersionsResponse}
     */
    listDmRoutingConfigVersions(options = {}) {
      return this.listDmRoutingConfigVersionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all routing configs for the authenticated customer.
     * @param {Object} options
     * @param {Array.<module:model/String>} [options.state] - Filter configs by lifecycle state. Accepts a comma-separated list of state values (e.g. `?state=active,active-with-draft`). Returns only configs whose current state matches one of the provided values. Returns 400 if any value is not a recognised state.
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigsResponse} and HTTP response
     */
    listDmRoutingConfigsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'state': this.apiClient.buildCollectionParam(options['state'], 'csv'),
        'sort': options['sort'],
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoutingConfigsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all routing configs for the authenticated customer.
     * @param {Object} options
     * @param {Array.<module:model/String>} [options.state] - Filter configs by lifecycle state. Accepts a comma-separated list of state values (e.g. `?state=active,active-with-draft`). Returns only configs whose current state matches one of the provided values. Returns 400 if any value is not a recognised state.
     * @param {module:model/String} [options.sort='-created_at'] - The order in which to list the results.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigsResponse}
     */
    listDmRoutingConfigs(options = {}) {
      return this.listDmRoutingConfigsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Reactivate a previously-active version. The currently active version, if any, becomes inactive but is retained in version history.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigVersionResponse} and HTTP response
     */
    reactivateDmRoutingConfigVersionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'version_id': options['version_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoutingConfigVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/versions/{version_id}/activate', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Reactivate a previously-active version. The currently active version, if any, becomes inactive but is retained in version history.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigVersionResponse}
     */
    reactivateDmRoutingConfigVersion(options = {}) {
      return this.reactivateDmRoutingConfigVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update metadata on the draft version, such as its comment. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/DraftUpdate} [options.draft_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoutingConfigVersionResponse} and HTTP response
     */
    updateDmRoutingConfigDraftWithHttpInfo(options = {}) {
      let postBody = options['draft_update'];
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }

      let pathParams = {
        'config_id': options['config_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RoutingConfigVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/draft', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update metadata on the draft version, such as its comment. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {module:model/DraftUpdate} [options.draft_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoutingConfigVersionResponse}
     */
    updateDmRoutingConfigDraft(options = {}) {
      return this.updateDmRoutingConfigDraftWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a path on the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/PathUpdate} [options.path_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PathResponse} and HTTP response
     */
    updateDmRoutingConfigPathWithHttpInfo(options = {}) {
      let postBody = options['path_update'];
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a path on the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {module:model/PathUpdate} [options.path_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PathResponse}
     */
    updateDmRoutingConfigPath(options = {}) {
      return this.updateDmRoutingConfigPathWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a rule on the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @param {module:model/RuleUpdate} [options.rule_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RuleResponse} and HTTP response
     */
    updateDmRoutingConfigRuleWithHttpInfo(options = {}) {
      let postBody = options['rule_update'];
      // Verify the required parameter 'config_id' is set.
      if (options['config_id'] === undefined || options['config_id'] === null) {
        throw new Error("Missing the required parameter 'config_id'.");
      }
      // Verify the required parameter 'path_id' is set.
      if (options['path_id'] === undefined || options['path_id'] === null) {
        throw new Error("Missing the required parameter 'path_id'.");
      }
      // Verify the required parameter 'rule_id' is set.
      if (options['rule_id'] === undefined || options['rule_id'] === null) {
        throw new Error("Missing the required parameter 'rule_id'.");
      }

      let pathParams = {
        'config_id': options['config_id'],
        'path_id': options['path_id'],
        'rule_id': options['rule_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RuleResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/routing-configs/{config_id}/paths/{path_id}/rules/{rule_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a rule on the config's draft version. If no draft exists, one is created automatically by cloning the active version.
     * @param {Object} options
     * @param {String} options.config_id
     * @param {String} options.path_id
     * @param {String} options.rule_id
     * @param {module:model/RuleUpdate} [options.rule_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuleResponse}
     */
    updateDmRoutingConfigRule(options = {}) {
      return this.updateDmRoutingConfigRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
