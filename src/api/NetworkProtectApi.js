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
import NetworkProtectConflict from '../model/NetworkProtectConflict';
import NetworkProtectEndpointCreate from '../model/NetworkProtectEndpointCreate';
import NetworkProtectEndpointResponse from '../model/NetworkProtectEndpointResponse';
import NetworkProtectEndpointUpdate from '../model/NetworkProtectEndpointUpdate';
import NetworkProtectEndpointsResponse from '../model/NetworkProtectEndpointsResponse';
import NetworkProtectInvalidRequest from '../model/NetworkProtectInvalidRequest';
import NetworkProtectNetworkCreate from '../model/NetworkProtectNetworkCreate';
import NetworkProtectNetworkResponse from '../model/NetworkProtectNetworkResponse';
import NetworkProtectNetworkUpdate from '../model/NetworkProtectNetworkUpdate';
import NetworkProtectNetworksResponse from '../model/NetworkProtectNetworksResponse';
import NetworkProtectPrefixListCreate from '../model/NetworkProtectPrefixListCreate';
import NetworkProtectPrefixListResponse from '../model/NetworkProtectPrefixListResponse';
import NetworkProtectPrefixListUpdate from '../model/NetworkProtectPrefixListUpdate';
import NetworkProtectPrefixListsResponse from '../model/NetworkProtectPrefixListsResponse';
import NetworkProtectRuleSetCreate from '../model/NetworkProtectRuleSetCreate';
import NetworkProtectRuleSetResponse from '../model/NetworkProtectRuleSetResponse';
import NetworkProtectRuleSetUpdate from '../model/NetworkProtectRuleSetUpdate';
import NetworkProtectRuleSetsResponse from '../model/NetworkProtectRuleSetsResponse';

/**
* NetworkProtect service.
* @module api/NetworkProtectApi
* @version 17.0.0
*/
export default class NetworkProtectApi {

    /**
    * Constructs a new NetworkProtectApi. 
    * @alias module:api/NetworkProtectApi
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
     * Creates a GRE delivery destination. A new endpoint is not attached to a network until it is added to an endpoint policy.
     * @param {Object} options
     * @param {module:model/NetworkProtectEndpointCreate} options.network_protect_endpoint_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectEndpointResponse} and HTTP response
     */
    createNetworkProtectEndpointWithHttpInfo(options = {}) {
      let postBody = options['network_protect_endpoint_create'];
      // Verify the required parameter 'network_protect_endpoint_create' is set.
      if (options['network_protect_endpoint_create'] === undefined || options['network_protect_endpoint_create'] === null) {
        throw new Error("Missing the required parameter 'network_protect_endpoint_create'.");
      }

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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectEndpointResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/endpoints', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a GRE delivery destination. A new endpoint is not attached to a network until it is added to an endpoint policy.
     * @param {Object} options
     * @param {module:model/NetworkProtectEndpointCreate} options.network_protect_endpoint_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectEndpointResponse}
     */
    createNetworkProtectEndpoint(options = {}) {
      return this.createNetworkProtectEndpointWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Registers customer-owned IP space for protection. The network starts with advertisement disabled and Fastly does not announce its prefix. Turn advertisement on after LOA and ROA authorization are ready. The create request cannot include advertise; sending it returns a `400 Bad Request` error.
     * @param {Object} options
     * @param {module:model/NetworkProtectNetworkCreate} options.network_protect_network_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectNetworkResponse} and HTTP response
     */
    createNetworkProtectNetworkWithHttpInfo(options = {}) {
      let postBody = options['network_protect_network_create'];
      // Verify the required parameter 'network_protect_network_create' is set.
      if (options['network_protect_network_create'] === undefined || options['network_protect_network_create'] === null) {
        throw new Error("Missing the required parameter 'network_protect_network_create'.");
      }

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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectNetworkResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/networks', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Registers customer-owned IP space for protection. The network starts with advertisement disabled and Fastly does not announce its prefix. Turn advertisement on after LOA and ROA authorization are ready. The create request cannot include advertise; sending it returns a `400 Bad Request` error.
     * @param {Object} options
     * @param {module:model/NetworkProtectNetworkCreate} options.network_protect_network_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectNetworkResponse}
     */
    createNetworkProtectNetwork(options = {}) {
      return this.createNetworkProtectNetworkWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Creates a typed list of addresses that rules can reference. The family is required and cannot be changed. The addresses list may remain empty.
     * @param {Object} options
     * @param {module:model/NetworkProtectPrefixListCreate} options.network_protect_prefix_list_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectPrefixListResponse} and HTTP response
     */
    createNetworkProtectPrefixListWithHttpInfo(options = {}) {
      let postBody = options['network_protect_prefix_list_create'];
      // Verify the required parameter 'network_protect_prefix_list_create' is set.
      if (options['network_protect_prefix_list_create'] === undefined || options['network_protect_prefix_list_create'] === null) {
        throw new Error("Missing the required parameter 'network_protect_prefix_list_create'.");
      }

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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectPrefixListResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/prefix-lists', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a typed list of addresses that rules can reference. The family is required and cannot be changed. The addresses list may remain empty.
     * @param {Object} options
     * @param {module:model/NetworkProtectPrefixListCreate} options.network_protect_prefix_list_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectPrefixListResponse}
     */
    createNetworkProtectPrefixList(options = {}) {
      return this.createNetworkProtectPrefixListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Creates an ordered rule set and stores its filtering intent. A rule set has at most 64 rules and uses the default action when no rule matches. Custom attachment and detachment are restricted in this release.
     * @param {Object} options
     * @param {module:model/NetworkProtectRuleSetCreate} options.network_protect_rule_set_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectRuleSetResponse} and HTTP response
     */
    createNetworkProtectRuleSetWithHttpInfo(options = {}) {
      let postBody = options['network_protect_rule_set_create'];
      // Verify the required parameter 'network_protect_rule_set_create' is set.
      if (options['network_protect_rule_set_create'] === undefined || options['network_protect_rule_set_create'] === null) {
        throw new Error("Missing the required parameter 'network_protect_rule_set_create'.");
      }

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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectRuleSetResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/rule-sets', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates an ordered rule set and stores its filtering intent. A rule set has at most 64 rules and uses the default action when no rule matches. Custom attachment and detachment are restricted in this release.
     * @param {Object} options
     * @param {module:model/NetworkProtectRuleSetCreate} options.network_protect_rule_set_create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectRuleSetResponse}
     */
    createNetworkProtectRuleSet(options = {}) {
      return this.createNetworkProtectRuleSetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes an endpoint. The endpoint must first be removed from every network policy; active references return a `409 Conflict` error.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNetworkProtectEndpointWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'endpoint_id' is set.
      if (options['endpoint_id'] === undefined || options['endpoint_id'] === null) {
        throw new Error("Missing the required parameter 'endpoint_id'.");
      }

      let pathParams = {
        'endpoint_id': options['endpoint_id']
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
      let accepts = ['application/problem+json'];
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
        '/network-protect/v1/endpoints/{endpoint_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes an endpoint. The endpoint must first be removed from every network policy; active references return a `409 Conflict` error.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNetworkProtectEndpoint(options = {}) {
      return this.deleteNetworkProtectEndpointWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a network and stops its advertisement and filtering. Endpoints and rule sets used by the network are not deleted.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNetworkProtectNetworkWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'network_id' is set.
      if (options['network_id'] === undefined || options['network_id'] === null) {
        throw new Error("Missing the required parameter 'network_id'.");
      }

      let pathParams = {
        'network_id': options['network_id']
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
      let accepts = ['application/problem+json'];
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
        '/network-protect/v1/networks/{network_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a network and stops its advertisement and filtering. Endpoints and rule sets used by the network are not deleted.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNetworkProtectNetwork(options = {}) {
      return this.deleteNetworkProtectNetworkWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a prefix list. Active rule references must be removed first; referenced lists return a `409 Conflict` error. Unknown and foreign IDs are indistinguishable and return a `404 Not Found` error.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNetworkProtectPrefixListWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'prefix_list_id' is set.
      if (options['prefix_list_id'] === undefined || options['prefix_list_id'] === null) {
        throw new Error("Missing the required parameter 'prefix_list_id'.");
      }

      let pathParams = {
        'prefix_list_id': options['prefix_list_id']
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
      let accepts = ['application/problem+json'];
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
        '/network-protect/v1/prefix-lists/{prefix_list_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a prefix list. Active rule references must be removed first; referenced lists return a `409 Conflict` error. Unknown and foreign IDs are indistinguishable and return a `404 Not Found` error.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNetworkProtectPrefixList(options = {}) {
      return this.deleteNetworkProtectPrefixListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a rule set. Attached rule sets cannot be deleted and return a `409 Conflict` error until their references are removed.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNetworkProtectRuleSetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rule_set_id' is set.
      if (options['rule_set_id'] === undefined || options['rule_set_id'] === null) {
        throw new Error("Missing the required parameter 'rule_set_id'.");
      }

      let pathParams = {
        'rule_set_id': options['rule_set_id']
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
      let accepts = ['application/problem+json'];
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
        '/network-protect/v1/rule-sets/{rule_set_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a rule set. Attached rule sets cannot be deleted and return a `409 Conflict` error until their references are removed.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNetworkProtectRuleSet(options = {}) {
      return this.deleteNetworkProtectRuleSetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves a single endpoint by its identifier.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectEndpointResponse} and HTTP response
     */
    getNetworkProtectEndpointWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'endpoint_id' is set.
      if (options['endpoint_id'] === undefined || options['endpoint_id'] === null) {
        throw new Error("Missing the required parameter 'endpoint_id'.");
      }

      let pathParams = {
        'endpoint_id': options['endpoint_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectEndpointResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/endpoints/{endpoint_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves a single endpoint by its identifier.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectEndpointResponse}
     */
    getNetworkProtectEndpoint(options = {}) {
      return this.getNetworkProtectEndpointWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves a single network by its identifier.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectNetworkResponse} and HTTP response
     */
    getNetworkProtectNetworkWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'network_id' is set.
      if (options['network_id'] === undefined || options['network_id'] === null) {
        throw new Error("Missing the required parameter 'network_id'.");
      }

      let pathParams = {
        'network_id': options['network_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectNetworkResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/networks/{network_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves a single network by its identifier.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectNetworkResponse}
     */
    getNetworkProtectNetwork(options = {}) {
      return this.getNetworkProtectNetworkWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves a single prefix list by its identifier. Unknown and foreign IDs are indistinguishable and return a `404 Not Found` error.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectPrefixListResponse} and HTTP response
     */
    getNetworkProtectPrefixListWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'prefix_list_id' is set.
      if (options['prefix_list_id'] === undefined || options['prefix_list_id'] === null) {
        throw new Error("Missing the required parameter 'prefix_list_id'.");
      }

      let pathParams = {
        'prefix_list_id': options['prefix_list_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectPrefixListResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/prefix-lists/{prefix_list_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves a single prefix list by its identifier. Unknown and foreign IDs are indistinguishable and return a `404 Not Found` error.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectPrefixListResponse}
     */
    getNetworkProtectPrefixList(options = {}) {
      return this.getNetworkProtectPrefixListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves a single rule set with rules in evaluation order.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectRuleSetResponse} and HTTP response
     */
    getNetworkProtectRuleSetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rule_set_id' is set.
      if (options['rule_set_id'] === undefined || options['rule_set_id'] === null) {
        throw new Error("Missing the required parameter 'rule_set_id'.");
      }

      let pathParams = {
        'rule_set_id': options['rule_set_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectRuleSetResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/rule-sets/{rule_set_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves a single rule set with rules in evaluation order.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectRuleSetResponse}
     */
    getNetworkProtectRuleSet(options = {}) {
      return this.getNetworkProtectRuleSetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists the customer's GRE delivery endpoints in ascending ID order. The response is cursor-paginated and includes the effective page limit.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectEndpointsResponse} and HTTP response
     */
    listNetworkProtectEndpointsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectEndpointsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/endpoints', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists the customer's GRE delivery endpoints in ascending ID order. The response is cursor-paginated and includes the effective page limit.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectEndpointsResponse}
     */
    listNetworkProtectEndpoints(options = {}) {
      return this.listNetworkProtectEndpointsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists the customer's networks in ascending ID order. The response is cursor-paginated and includes the effective page limit.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectNetworksResponse} and HTTP response
     */
    listNetworkProtectNetworksWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectNetworksResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/networks', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists the customer's networks in ascending ID order. The response is cursor-paginated and includes the effective page limit.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectNetworksResponse}
     */
    listNetworkProtectNetworks(options = {}) {
      return this.listNetworkProtectNetworksWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists prefix lists in ascending ID order. Positive limits above 1000 are accepted and clamped to 1000. Invalid limits return a `400 Bad Request` error.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectPrefixListsResponse} and HTTP response
     */
    listNetworkProtectPrefixListsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectPrefixListsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/prefix-lists', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists prefix lists in ascending ID order. Positive limits above 1000 are accepted and clamped to 1000. Invalid limits return a `400 Bad Request` error.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectPrefixListsResponse}
     */
    listNetworkProtectPrefixLists(options = {}) {
      return this.listNetworkProtectPrefixListsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists rule sets in ascending ID order. Positive limits above 1000 are accepted and clamped to 1000; invalid limits return a `400 Bad Request` error.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectRuleSetsResponse} and HTTP response
     */
    listNetworkProtectRuleSetsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectRuleSetsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/rule-sets', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists rule sets in ascending ID order. Positive limits above 1000 are accepted and clamped to 1000; invalid limits return a `400 Bad Request` error.
     * @param {Object} options
     * @param {Number} [options.limit=100] - Maximum resources to return. Defaults to 100. Positive values above 1000 are accepted and clamped to 1000; the effective value is reported in meta.limit. Zero, negative, and non-integer values return a `400 Bad Request` error.
     * @param {String} [options.cursor] - Continuation value from a previous response's meta.next_cursor. Omit this parameter to request the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectRuleSetsResponse}
     */
    listNetworkProtectRuleSets(options = {}) {
      return this.listNetworkProtectRuleSetsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates an endpoint. Omitted fields remain unchanged. The IP address cannot be changed; create a new endpoint if the destination changes.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @param {module:model/NetworkProtectEndpointUpdate} options.network_protect_endpoint_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectEndpointResponse} and HTTP response
     */
    updateNetworkProtectEndpointWithHttpInfo(options = {}) {
      let postBody = options['network_protect_endpoint_update'];
      // Verify the required parameter 'endpoint_id' is set.
      if (options['endpoint_id'] === undefined || options['endpoint_id'] === null) {
        throw new Error("Missing the required parameter 'endpoint_id'.");
      }
      // Verify the required parameter 'network_protect_endpoint_update' is set.
      if (options['network_protect_endpoint_update'] === undefined || options['network_protect_endpoint_update'] === null) {
        throw new Error("Missing the required parameter 'network_protect_endpoint_update'.");
      }

      let pathParams = {
        'endpoint_id': options['endpoint_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectEndpointResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/endpoints/{endpoint_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates an endpoint. Omitted fields remain unchanged. The IP address cannot be changed; create a new endpoint if the destination changes.
     * @param {Object} options
     * @param {String} options.endpoint_id - Unique identifier of the Network Protect endpoint.
     * @param {module:model/NetworkProtectEndpointUpdate} options.network_protect_endpoint_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectEndpointResponse}
     */
    updateNetworkProtectEndpoint(options = {}) {
      return this.updateNetworkProtectEndpointWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates a network. Omitted fields remain unchanged. The prefix cannot be changed. Sending `endpoint_policies` replaces the complete policy list; an empty array removes every policy. Advertisement is desired state. Enabling it requires an approved LOA, a valid ROA, and a ready default-region delivery policy. A readiness failure returns a `409 Conflict` error.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @param {module:model/NetworkProtectNetworkUpdate} options.network_protect_network_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectNetworkResponse} and HTTP response
     */
    updateNetworkProtectNetworkWithHttpInfo(options = {}) {
      let postBody = options['network_protect_network_update'];
      // Verify the required parameter 'network_id' is set.
      if (options['network_id'] === undefined || options['network_id'] === null) {
        throw new Error("Missing the required parameter 'network_id'.");
      }
      // Verify the required parameter 'network_protect_network_update' is set.
      if (options['network_protect_network_update'] === undefined || options['network_protect_network_update'] === null) {
        throw new Error("Missing the required parameter 'network_protect_network_update'.");
      }

      let pathParams = {
        'network_id': options['network_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectNetworkResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/networks/{network_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates a network. Omitted fields remain unchanged. The prefix cannot be changed. Sending `endpoint_policies` replaces the complete policy list; an empty array removes every policy. Advertisement is desired state. Enabling it requires an approved LOA, a valid ROA, and a ready default-region delivery policy. A readiness failure returns a `409 Conflict` error.
     * @param {Object} options
     * @param {String} options.network_id - Unique identifier of the Network Protect network.
     * @param {module:model/NetworkProtectNetworkUpdate} options.network_protect_network_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectNetworkResponse}
     */
    updateNetworkProtectNetwork(options = {}) {
      return this.updateNetworkProtectNetworkWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates a prefix list. The family cannot be changed. Sending addresses replaces the complete list; an empty array clears it when no active source-list restriction applies. Addresses are canonicalized, deduplicated, and sorted by the backend.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @param {module:model/NetworkProtectPrefixListUpdate} options.network_protect_prefix_list_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectPrefixListResponse} and HTTP response
     */
    updateNetworkProtectPrefixListWithHttpInfo(options = {}) {
      let postBody = options['network_protect_prefix_list_update'];
      // Verify the required parameter 'prefix_list_id' is set.
      if (options['prefix_list_id'] === undefined || options['prefix_list_id'] === null) {
        throw new Error("Missing the required parameter 'prefix_list_id'.");
      }
      // Verify the required parameter 'network_protect_prefix_list_update' is set.
      if (options['network_protect_prefix_list_update'] === undefined || options['network_protect_prefix_list_update'] === null) {
        throw new Error("Missing the required parameter 'network_protect_prefix_list_update'.");
      }

      let pathParams = {
        'prefix_list_id': options['prefix_list_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectPrefixListResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/prefix-lists/{prefix_list_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates a prefix list. The family cannot be changed. Sending addresses replaces the complete list; an empty array clears it when no active source-list restriction applies. Addresses are canonicalized, deduplicated, and sorted by the backend.
     * @param {Object} options
     * @param {String} options.prefix_list_id - Unique identifier of the Network Protect prefix list.
     * @param {module:model/NetworkProtectPrefixListUpdate} options.network_protect_prefix_list_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectPrefixListResponse}
     */
    updateNetworkProtectPrefixList(options = {}) {
      return this.updateNetworkProtectPrefixListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates a rule set. Omitted fields remain unchanged. Sending rules replaces the complete ordered list; an empty array removes every rule. Custom attachment and detachment remain restricted in this release.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @param {module:model/NetworkProtectRuleSetUpdate} options.network_protect_rule_set_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkProtectRuleSetResponse} and HTTP response
     */
    updateNetworkProtectRuleSetWithHttpInfo(options = {}) {
      let postBody = options['network_protect_rule_set_update'];
      // Verify the required parameter 'rule_set_id' is set.
      if (options['rule_set_id'] === undefined || options['rule_set_id'] === null) {
        throw new Error("Missing the required parameter 'rule_set_id'.");
      }
      // Verify the required parameter 'network_protect_rule_set_update' is set.
      if (options['network_protect_rule_set_update'] === undefined || options['network_protect_rule_set_update'] === null) {
        throw new Error("Missing the required parameter 'network_protect_rule_set_update'.");
      }

      let pathParams = {
        'rule_set_id': options['rule_set_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = NetworkProtectRuleSetResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/network-protect/v1/rule-sets/{rule_set_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates a rule set. Omitted fields remain unchanged. Sending rules replaces the complete ordered list; an empty array removes every rule. Custom attachment and detachment remain restricted in this release.
     * @param {Object} options
     * @param {String} options.rule_set_id - Unique identifier of the Network Protect rule set.
     * @param {module:model/NetworkProtectRuleSetUpdate} options.network_protect_rule_set_update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkProtectRuleSetResponse}
     */
    updateNetworkProtectRuleSet(options = {}) {
      return this.updateNetworkProtectRuleSetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
