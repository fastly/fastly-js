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
import ArcCreateVirtualKeyResponse from '../model/ArcCreateVirtualKeyResponse';
import ArcError from '../model/ArcError';
import ArcRotateVirtualKeyRequest from '../model/ArcRotateVirtualKeyRequest';
import ArcRotateVirtualKeyResponse from '../model/ArcRotateVirtualKeyResponse';
import ArcUpdateVirtualKeyRequest from '../model/ArcUpdateVirtualKeyRequest';
import ArcUpdateVirtualKeyResponse from '../model/ArcUpdateVirtualKeyResponse';
import ArcVirtualKey from '../model/ArcVirtualKey';
import ArcVirtualKeyFailoverRequest from '../model/ArcVirtualKeyFailoverRequest';
import ArcVirtualKeyFailoverResponse from '../model/ArcVirtualKeyFailoverResponse';
import ArcVirtualKeyResponse from '../model/ArcVirtualKeyResponse';
import ArcVirtualKeysResponse from '../model/ArcVirtualKeysResponse';

/**
* AiRuntimeControlVirtualKeys service.
* @module api/AiRuntimeControlVirtualKeysApi
* @version 17.0.0
*/
export default class AiRuntimeControlVirtualKeysApi {

    /**
    * Constructs a new AiRuntimeControlVirtualKeysApi. 
    * @alias module:api/AiRuntimeControlVirtualKeysApi
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
     * Create a new virtual key for authenticating requests through the AI Runtime Control gateway.
     * @param {Object} options
     * @param {module:model/ArcVirtualKey} options.arc_virtual_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcCreateVirtualKeyResponse} and HTTP response
     */
    arcCreateVirtualKeyWithHttpInfo(options = {}) {
      let postBody = options['arc_virtual_key'];
      // Verify the required parameter 'arc_virtual_key' is set.
      if (options['arc_virtual_key'] === undefined || options['arc_virtual_key'] === null) {
        throw new Error("Missing the required parameter 'arc_virtual_key'.");
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
      let returnType = ArcCreateVirtualKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new virtual key for authenticating requests through the AI Runtime Control gateway.
     * @param {Object} options
     * @param {module:model/ArcVirtualKey} options.arc_virtual_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcCreateVirtualKeyResponse}
     */
    arcCreateVirtualKey(options = {}) {
      return this.arcCreateVirtualKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a virtual key. This also deletes any security configuration associated with the key.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    arcDeleteVirtualKeyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
        '/ai-runtime-control/v1/keys/{key_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a virtual key. This also deletes any security configuration associated with the key.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    arcDeleteVirtualKey(options = {}) {
      return this.arcDeleteVirtualKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single virtual key.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcVirtualKeyResponse} and HTTP response
     */
    arcGetVirtualKeyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
      let returnType = ArcVirtualKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys/{key_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single virtual key.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcVirtualKeyResponse}
     */
    arcGetVirtualKey(options = {}) {
      return this.arcGetVirtualKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve the failover policy for a virtual key. A failover policy lists alternate provider connections to retry a request against, and which error conditions trigger a retry.  Failover is a per-account feature. If it isn't enabled on your account, this endpoint returns a 404 response. 
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcVirtualKeyFailoverResponse} and HTTP response
     */
    arcGetVirtualKeyFailoverWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
      let returnType = ArcVirtualKeyFailoverResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys/{key_id}/failover', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve the failover policy for a virtual key. A failover policy lists alternate provider connections to retry a request against, and which error conditions trigger a retry.  Failover is a per-account feature. If it isn't enabled on your account, this endpoint returns a 404 response. 
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcVirtualKeyFailoverResponse}
     */
    arcGetVirtualKeyFailover(options = {}) {
      return this.arcGetVirtualKeyFailoverWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List the virtual keys belonging to your account.
     * @param {Object} options
     * @param {Boolean} [options.include_deleted=false] - Include deleted virtual keys in the results.
     * @param {String} [options.search] - Filter results to virtual keys whose name contains this substring.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results, or the `prev_cursor` value to request the previous page. 
     * @param {Number} [options.limit=10] - Limit how many results are returned.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-created_at`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcVirtualKeysResponse} and HTTP response
     */
    arcListVirtualKeysWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'include_deleted': options['include_deleted'],
        'search': options['search'],
        'cursor': options['cursor'],
        'limit': options['limit'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcVirtualKeysResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List the virtual keys belonging to your account.
     * @param {Object} options
     * @param {Boolean} [options.include_deleted=false] - Include deleted virtual keys in the results.
     * @param {String} [options.search] - Filter results to virtual keys whose name contains this substring.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results, or the `prev_cursor` value to request the previous page. 
     * @param {Number} [options.limit=10] - Limit how many results are returned.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-created_at`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcVirtualKeysResponse}
     */
    arcListVirtualKeys(options = {}) {
      return this.arcListVirtualKeysWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Issue a new access token for a virtual key, invalidating the previous one.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcRotateVirtualKeyRequest} [options.arc_rotate_virtual_key_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcRotateVirtualKeyResponse} and HTTP response
     */
    arcRotateVirtualKeyWithHttpInfo(options = {}) {
      let postBody = options['arc_rotate_virtual_key_request'];
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
      let returnType = ArcRotateVirtualKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys/{key_id}/rotate', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Issue a new access token for a virtual key, invalidating the previous one.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcRotateVirtualKeyRequest} [options.arc_rotate_virtual_key_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcRotateVirtualKeyResponse}
     */
    arcRotateVirtualKey(options = {}) {
      return this.arcRotateVirtualKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the attributes of a virtual key. Only the fields you include are changed.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcUpdateVirtualKeyRequest} options.arc_update_virtual_key_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcUpdateVirtualKeyResponse} and HTTP response
     */
    arcUpdateVirtualKeyWithHttpInfo(options = {}) {
      let postBody = options['arc_update_virtual_key_request'];
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }
      // Verify the required parameter 'arc_update_virtual_key_request' is set.
      if (options['arc_update_virtual_key_request'] === undefined || options['arc_update_virtual_key_request'] === null) {
        throw new Error("Missing the required parameter 'arc_update_virtual_key_request'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
      let returnType = ArcUpdateVirtualKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys/{key_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the attributes of a virtual key. Only the fields you include are changed.
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcUpdateVirtualKeyRequest} options.arc_update_virtual_key_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcUpdateVirtualKeyResponse}
     */
    arcUpdateVirtualKey(options = {}) {
      return this.arcUpdateVirtualKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Replace the failover policy for a virtual key.  Failover is a per-account feature. If it isn't enabled on your account, this endpoint returns a 404 response. 
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcVirtualKeyFailoverRequest} options.arc_virtual_key_failover_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcVirtualKeyFailoverResponse} and HTTP response
     */
    arcUpdateVirtualKeyFailoverWithHttpInfo(options = {}) {
      let postBody = options['arc_virtual_key_failover_request'];
      // Verify the required parameter 'key_id' is set.
      if (options['key_id'] === undefined || options['key_id'] === null) {
        throw new Error("Missing the required parameter 'key_id'.");
      }
      // Verify the required parameter 'arc_virtual_key_failover_request' is set.
      if (options['arc_virtual_key_failover_request'] === undefined || options['arc_virtual_key_failover_request'] === null) {
        throw new Error("Missing the required parameter 'arc_virtual_key_failover_request'.");
      }

      let pathParams = {
        'key_id': options['key_id']
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
      let returnType = ArcVirtualKeyFailoverResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/keys/{key_id}/failover', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Replace the failover policy for a virtual key.  Failover is a per-account feature. If it isn't enabled on your account, this endpoint returns a 404 response. 
     * @param {Object} options
     * @param {String} options.key_id - The ID of the virtual key.
     * @param {module:model/ArcVirtualKeyFailoverRequest} options.arc_virtual_key_failover_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcVirtualKeyFailoverResponse}
     */
    arcUpdateVirtualKeyFailover(options = {}) {
      return this.arcUpdateVirtualKeyFailoverWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
