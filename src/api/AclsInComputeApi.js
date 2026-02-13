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
import ComputeAclCreateAclsRequest from '../model/ComputeAclCreateAclsRequest';
import ComputeAclCreateAclsResponse from '../model/ComputeAclCreateAclsResponse';
import ComputeAclList from '../model/ComputeAclList';
import ComputeAclListEntries from '../model/ComputeAclListEntries';
import ComputeAclLookup from '../model/ComputeAclLookup';
import ComputeAclUpdate from '../model/ComputeAclUpdate';

/**
* AclsInCompute service.
* @module api/AclsInComputeApi
* @version 15.0.0-beta.1
*/
export default class AclsInComputeApi {

    /**
    * Constructs a new AclsInComputeApi. 
    * @alias module:api/AclsInComputeApi
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
     * Create a new ACL.
     * @param {Object} options
     * @param {module:model/ComputeAclCreateAclsRequest} [options.compute_acl_create_acls_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputeAclCreateAclsResponse} and HTTP response
     */
    computeAclCreateAclsWithHttpInfo(options = {}) {
      let postBody = options['compute_acl_create_acls_request'];

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
      let returnType = ComputeAclCreateAclsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/acls', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new ACL.
     * @param {Object} options
     * @param {module:model/ComputeAclCreateAclsRequest} [options.compute_acl_create_acls_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputeAclCreateAclsResponse}
     */
    computeAclCreateAcls(options = {}) {
      return this.computeAclCreateAclsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    computeAclDeleteSAclIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'acl_id': options['acl_id']
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
        '/resources/acls/{acl_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    computeAclDeleteSAclId(options = {}) {
      return this.computeAclDeleteSAclIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputeAclListEntries} and HTTP response
     */
    computeAclListAclEntriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'acl_id': options['acl_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
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
      let returnType = ComputeAclListEntries;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/acls/{acl_id}/entries', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputeAclListEntries}
     */
    computeAclListAclEntries(options = {}) {
      return this.computeAclListAclEntriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all ACLs.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputeAclList} and HTTP response
     */
    computeAclListAclsWithHttpInfo(options = {}) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ComputeAclList;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/acls', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all ACLs.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputeAclList}
     */
    computeAclListAcls(options = {}) {
      return this.computeAclListAclsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Describe an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputeAclCreateAclsResponse} and HTTP response
     */
    computeAclListAclsSAclIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'acl_id': options['acl_id']
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
      let returnType = ComputeAclCreateAclsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/acls/{acl_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Describe an ACL.
     * @param {Object} options
     * @param {String} options.acl_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputeAclCreateAclsResponse}
     */
    computeAclListAclsSAclId(options = {}) {
      return this.computeAclListAclsSAclIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Find a matching ACL entry for an IP address.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {String} options.acl_ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputeAclLookup} and HTTP response
     */
    computeAclLookupAclsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }
      // Verify the required parameter 'acl_ip' is set.
      if (options['acl_ip'] === undefined || options['acl_ip'] === null) {
        throw new Error("Missing the required parameter 'acl_ip'.");
      }

      let pathParams = {
        'acl_id': options['acl_id'],
        'acl_ip': options['acl_ip']
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
      let returnType = ComputeAclLookup;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/acls/{acl_id}/entry/{acl_ip}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Find a matching ACL entry for an IP address.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {String} options.acl_ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputeAclLookup}
     */
    computeAclLookupAcls(options = {}) {
      return this.computeAclLookupAclsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an ACL entry with a new operation or action, this allows you to modify an existing entry or delete it.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {module:model/ComputeAclUpdate} [options.compute_acl_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    computeAclUpdateAclsWithHttpInfo(options = {}) {
      let postBody = options['compute_acl_update'];
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'acl_id': options['acl_id']
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
        '/resources/acls/{acl_id}/entries', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update an ACL entry with a new operation or action, this allows you to modify an existing entry or delete it.
     * @param {Object} options
     * @param {String} options.acl_id
     * @param {module:model/ComputeAclUpdate} [options.compute_acl_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    computeAclUpdateAcls(options = {}) {
      return this.computeAclUpdateAclsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
