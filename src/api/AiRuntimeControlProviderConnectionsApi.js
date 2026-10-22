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
import ArcError from '../model/ArcError';
import ArcGetProviderConnectionResponse from '../model/ArcGetProviderConnectionResponse';
import ArcProviderConnectionRequest from '../model/ArcProviderConnectionRequest';
import ArcProviderConnectionResponse from '../model/ArcProviderConnectionResponse';
import ArcProviderConnectionsResponse from '../model/ArcProviderConnectionsResponse';
import ArcUpdateProviderConnectionRequest from '../model/ArcUpdateProviderConnectionRequest';

/**
* AiRuntimeControlProviderConnections service.
* @module api/AiRuntimeControlProviderConnectionsApi
* @version 17.0.0
*/
export default class AiRuntimeControlProviderConnectionsApi {

    /**
    * Constructs a new AiRuntimeControlProviderConnectionsApi. 
    * @alias module:api/AiRuntimeControlProviderConnectionsApi
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
     * Create a provider connection. Set `auth_type` to `api-key` (the default) to connect with a provider's own API key, or to `aws-iam` to connect to Amazon Bedrock using an AWS IAM role.  Accounts are limited to 25 provider connections. Creating a 26th connection returns a 409 response. 
     * @param {Object} options
     * @param {module:model/ArcProviderConnectionRequest} options.arc_provider_connection_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcProviderConnectionResponse} and HTTP response
     */
    arcCreateProviderConnectionWithHttpInfo(options = {}) {
      let postBody = options['arc_provider_connection_request'];
      // Verify the required parameter 'arc_provider_connection_request' is set.
      if (options['arc_provider_connection_request'] === undefined || options['arc_provider_connection_request'] === null) {
        throw new Error("Missing the required parameter 'arc_provider_connection_request'.");
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
      let returnType = ArcProviderConnectionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/provider-connections', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a provider connection. Set `auth_type` to `api-key` (the default) to connect with a provider's own API key, or to `aws-iam` to connect to Amazon Bedrock using an AWS IAM role.  Accounts are limited to 25 provider connections. Creating a 26th connection returns a 409 response. 
     * @param {Object} options
     * @param {module:model/ArcProviderConnectionRequest} options.arc_provider_connection_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcProviderConnectionResponse}
     */
    arcCreateProviderConnection(options = {}) {
      return this.arcCreateProviderConnectionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a provider connection. Returns a 409 response if the connection is still referenced by a virtual key's failover policy. 
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    arcDeleteProviderConnectionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }

      let pathParams = {
        'id': options['id']
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
        '/ai-runtime-control/v1/provider-connections/{id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a provider connection. Returns a 409 response if the connection is still referenced by a virtual key's failover policy. 
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    arcDeleteProviderConnection(options = {}) {
      return this.arcDeleteProviderConnectionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single provider connection.
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcGetProviderConnectionResponse} and HTTP response
     */
    arcGetProviderConnectionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }

      let pathParams = {
        'id': options['id']
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
      let returnType = ArcGetProviderConnectionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/provider-connections/{id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single provider connection.
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcGetProviderConnectionResponse}
     */
    arcGetProviderConnection(options = {}) {
      return this.arcGetProviderConnectionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List the provider connections belonging to your account.
     * @param {Object} options
     * @param {Boolean} [options.include_deleted=false] - Include deleted provider connections in the results. Deleted connections have a `deleted_at` value.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-name`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcProviderConnectionsResponse} and HTTP response
     */
    arcListProviderConnectionsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'include_deleted': options['include_deleted'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcProviderConnectionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/provider-connections', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List the provider connections belonging to your account.
     * @param {Object} options
     * @param {Boolean} [options.include_deleted=false] - Include deleted provider connections in the results. Deleted connections have a `deleted_at` value.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-name`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcProviderConnectionsResponse}
     */
    arcListProviderConnections(options = {}) {
      return this.arcListProviderConnectionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the attributes of a provider connection. Only the fields you include are changed. Which fields you can set depends on the connection's existing `auth_type`: `base_url` and `api_key` apply only to `api-key` connections, and `customer_role_arn` and `region` apply only to `aws-iam` connections. `auth_type` itself cannot be changed. 
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @param {module:model/ArcUpdateProviderConnectionRequest} options.arc_update_provider_connection_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcProviderConnectionResponse} and HTTP response
     */
    arcUpdateProviderConnectionWithHttpInfo(options = {}) {
      let postBody = options['arc_update_provider_connection_request'];
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }
      // Verify the required parameter 'arc_update_provider_connection_request' is set.
      if (options['arc_update_provider_connection_request'] === undefined || options['arc_update_provider_connection_request'] === null) {
        throw new Error("Missing the required parameter 'arc_update_provider_connection_request'.");
      }

      let pathParams = {
        'id': options['id']
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
      let returnType = ArcProviderConnectionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/provider-connections/{id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the attributes of a provider connection. Only the fields you include are changed. Which fields you can set depends on the connection's existing `auth_type`: `base_url` and `api_key` apply only to `api-key` connections, and `customer_role_arn` and `region` apply only to `aws-iam` connections. `auth_type` itself cannot be changed. 
     * @param {Object} options
     * @param {String} options.id - The ID of the provider connection.
     * @param {module:model/ArcUpdateProviderConnectionRequest} options.arc_update_provider_connection_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcProviderConnectionResponse}
     */
    arcUpdateProviderConnection(options = {}) {
      return this.arcUpdateProviderConnectionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
