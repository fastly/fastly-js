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

/**
* IamUserGroups service.
* @module api/IamUserGroupsApi
* @version 12.1.0
*/
export default class IamUserGroupsApi {

    /**
    * Constructs a new IamUserGroupsApi. 
    * @alias module:api/IamUserGroupsApi
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
     * Add members to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addUserGroupMembersWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/members', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add members to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addUserGroupMembers(options = {}) {
      return this.addUserGroupMembersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add roles to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addUserGroupRolesWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/roles', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add roles to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addUserGroupRoles(options = {}) {
      return this.addUserGroupRolesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add service groups to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addUserGroupServiceGroupsWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/service-groups', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add service groups to a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addUserGroupServiceGroups(options = {}) {
      return this.addUserGroupServiceGroupsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a user group.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createAUserGroupWithHttpInfo(options = {}) {
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
        '/user-groups', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a user group.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createAUserGroup(options = {}) {
      return this.createAUserGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAUserGroupWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAUserGroup(options = {}) {
      return this.deleteAUserGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getAUserGroupWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getAUserGroup(options = {}) {
      return this.getAUserGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List members of a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listUserGroupMembersWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/members', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List members of a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listUserGroupMembers(options = {}) {
      return this.listUserGroupMembersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List roles in a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listUserGroupRolesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/roles', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List roles in a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listUserGroupRoles(options = {}) {
      return this.listUserGroupRolesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List service groups in a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listUserGroupServiceGroupsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/service-groups', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List service groups in a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listUserGroupServiceGroups(options = {}) {
      return this.listUserGroupServiceGroupsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all user groups.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listUserGroupsWithHttpInfo(options = {}) {
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
        '/user-groups', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all user groups.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listUserGroups(options = {}) {
      return this.listUserGroupsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Remove members of a user group
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserGroupMembersWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/members', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Remove members of a user group
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserGroupMembers(options = {}) {
      return this.removeUserGroupMembersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Remove roles from a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserGroupRolesWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/roles', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Remove roles from a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserGroupRoles(options = {}) {
      return this.removeUserGroupRolesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Remove service groups from a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeUserGroupServiceGroupsWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}/service-groups', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Remove service groups from a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeUserGroupServiceGroups(options = {}) {
      return this.removeUserGroupServiceGroupsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateAUserGroupWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'user_group_id' is set.
      if (options['user_group_id'] === undefined || options['user_group_id'] === null) {
        throw new Error("Missing the required parameter 'user_group_id'.");
      }

      let pathParams = {
        'user_group_id': options['user_group_id']
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
        '/user-groups/{user_group_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a user group.
     * @param {Object} options
     * @param {String} options.user_group_id - Alphanumeric string identifying the user group.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateAUserGroup(options = {}) {
      return this.updateAUserGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
