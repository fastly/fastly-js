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
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import OperationCreate from '../model/OperationCreate';
import OperationGet from '../model/OperationGet';
import OperationUpdate from '../model/OperationUpdate';
import TagBase from '../model/TagBase';
import TagCreate from '../model/TagCreate';
import TagGet from '../model/TagGet';

/**
* ApisecurityOperations service.
* @module api/ApisecurityOperationsApi
* @version 15.0.0-beta.3
*/
export default class ApisecurityOperationsApi {

    /**
    * Constructs a new ApisecurityOperationsApi. 
    * @alias module:api/ApisecurityOperationsApi
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
     * Create a new operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/OperationCreate} [options.operation_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OperationGet} and HTTP response
     */
    apiSecurityCreateOperationWithHttpInfo(options = {}) {
      let postBody = options['operation_create'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = OperationGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/operations', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/OperationCreate} [options.operation_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OperationGet}
     */
    apiSecurityCreateOperation(options = {}) {
      return this.apiSecurityCreateOperationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new operation tag associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/TagCreate} [options.tag_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagGet} and HTTP response
     */
    apiSecurityCreateOperationTagWithHttpInfo(options = {}) {
      let postBody = options['tag_create'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = TagGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/tags', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new operation tag associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/TagCreate} [options.tag_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagGet}
     */
    apiSecurityCreateOperationTag(options = {}) {
      return this.apiSecurityCreateOperationTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an existing operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiSecurityDeleteOperationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'operation_id' is set.
      if (options['operation_id'] === undefined || options['operation_id'] === null) {
        throw new Error("Missing the required parameter 'operation_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'operation_id': options['operation_id']
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
        '/api-security/v1/services/{service_id}/operations/{operation_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an existing operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiSecurityDeleteOperation(options = {}) {
      return this.apiSecurityDeleteOperationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an existing operation tag.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiSecurityDeleteOperationTagWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'tag_id' is set.
      if (options['tag_id'] === undefined || options['tag_id'] === null) {
        throw new Error("Missing the required parameter 'tag_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'tag_id': options['tag_id']
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
        '/api-security/v1/services/{service_id}/tags/{tag_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an existing operation tag.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiSecurityDeleteOperationTag(options = {}) {
      return this.apiSecurityDeleteOperationTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific operation associated with a service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OperationGet} and HTTP response
     */
    apiSecurityGetOperationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'operation_id' is set.
      if (options['operation_id'] === undefined || options['operation_id'] === null) {
        throw new Error("Missing the required parameter 'operation_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'operation_id': options['operation_id']
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
      let returnType = OperationGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/operations/{operation_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific operation associated with a service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OperationGet}
     */
    apiSecurityGetOperation(options = {}) {
      return this.apiSecurityGetOperationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific operation tag by its unique identifier.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagGet} and HTTP response
     */
    apiSecurityGetOperationTagWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'tag_id' is set.
      if (options['tag_id'] === undefined || options['tag_id'] === null) {
        throw new Error("Missing the required parameter 'tag_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'tag_id': options['tag_id']
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
      let returnType = TagGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/tags/{tag_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific operation tag by its unique identifier.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagGet}
     */
    apiSecurityGetOperationTag(options = {}) {
      return this.apiSecurityGetOperationTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all discovered operations associated with a specific service. Optionally filter operations by status.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/String} [options.status] - Filter operations by status. Only operations with this status will be returned.
     * @param {Number} [options.limit=100] - The maximum number of operations to return per page.
     * @param {Number} [options.page=0] - The page number to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    apiSecurityListDiscoveredOperationsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'status': options['status'],
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2001;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/discovered-operations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all discovered operations associated with a specific service. Optionally filter operations by status.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {module:model/String} [options.status] - Filter operations by status. Only operations with this status will be returned.
     * @param {Number} [options.limit=100] - The maximum number of operations to return per page.
     * @param {Number} [options.page=0] - The page number to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    apiSecurityListDiscoveredOperations(options = {}) {
      return this.apiSecurityListDiscoveredOperationsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all operation tags associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    apiSecurityListOperationTagsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = InlineResponse2003;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/tags', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all operation tags associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    apiSecurityListOperationTags(options = {}) {
      return this.apiSecurityListOperationTagsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all operations associated with a specific service. Optionally filter operations by tag ID.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} [options.tag_id] - Filter operations by operation tag ID. Only operations associated with this operation tag will be returned.
     * @param {Number} [options.limit=100] - The maximum number of operations to return per page.
     * @param {Number} [options.page=0] - The page number to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    apiSecurityListOperationsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'tag_id': options['tag_id'],
        'limit': options['limit'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2002;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/operations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all operations associated with a specific service. Optionally filter operations by tag ID.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} [options.tag_id] - Filter operations by operation tag ID. Only operations associated with this operation tag will be returned.
     * @param {Number} [options.limit=100] - The maximum number of operations to return per page.
     * @param {Number} [options.page=0] - The page number to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    apiSecurityListOperations(options = {}) {
      return this.apiSecurityListOperationsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Partially update an existing operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @param {module:model/OperationUpdate} [options.operation_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OperationGet} and HTTP response
     */
    apiSecurityUpdateOperationWithHttpInfo(options = {}) {
      let postBody = options['operation_update'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'operation_id' is set.
      if (options['operation_id'] === undefined || options['operation_id'] === null) {
        throw new Error("Missing the required parameter 'operation_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'operation_id': options['operation_id']
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
      let returnType = OperationGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/operations/{operation_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Partially update an existing operation associated with a specific service.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.operation_id - The unique identifier of the operation.
     * @param {module:model/OperationUpdate} [options.operation_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OperationGet}
     */
    apiSecurityUpdateOperation(options = {}) {
      return this.apiSecurityUpdateOperationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Partially update an existing operation tag.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @param {module:model/TagBase} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagGet} and HTTP response
     */
    apiSecurityUpdateOperationTagWithHttpInfo(options = {}) {
      let postBody = options['body'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'tag_id' is set.
      if (options['tag_id'] === undefined || options['tag_id'] === null) {
        throw new Error("Missing the required parameter 'tag_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'tag_id': options['tag_id']
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
      let returnType = TagGet;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api-security/v1/services/{service_id}/tags/{tag_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Partially update an existing operation tag.
     * @param {Object} options
     * @param {String} options.service_id - The unique identifier of the service.
     * @param {String} options.tag_id - The unique identifier of the operation tag.
     * @param {module:model/TagBase} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagGet}
     */
    apiSecurityUpdateOperationTag(options = {}) {
      return this.apiSecurityUpdateOperationTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
