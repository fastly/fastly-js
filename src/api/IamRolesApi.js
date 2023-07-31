/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* IamRoles service.
* @module api/IamRolesApi
* @version 6.0.0
*/
export default class IamRolesApi {

    /**
    * Constructs a new IamRolesApi. 
    * @alias module:api/IamRolesApi
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
     * Add permissions to a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addRolePermissionsWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles/{role_id}/permissions', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add permissions to a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addRolePermissions(options = {}) {
      return this.addRolePermissionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a role.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createARoleWithHttpInfo(options = {}) {
      let postBody = options['request_body'];

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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a role.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createARole(options = {}) {
      return this.createARoleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteARoleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
        '/roles/{role_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteARole(options = {}) {
      return this.deleteARoleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getARoleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles/{role_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getARole(options = {}) {
      return this.getARoleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all permissions in a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listRolePermissionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles/{role_id}/permissions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all permissions in a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listRolePermissions(options = {}) {
      return this.listRolePermissionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all roles.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listRolesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'per_page': options['per_page'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all roles.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listRoles(options = {}) {
      return this.listRolesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Remove permissions from a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeRolePermissionsWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
        '/roles/{role_id}/permissions', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Remove permissions from a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeRolePermissions(options = {}) {
      return this.removeRolePermissionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateARoleWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'role_id' is set.
      if (options['role_id'] === undefined || options['role_id'] === null) {
        throw new Error("Missing the required parameter 'role_id'.");
      }

      let pathParams = {
        'role_id': options['role_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/roles/{role_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a role.
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateARole(options = {}) {
      return this.updateARoleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
