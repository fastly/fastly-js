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
* IamUserGroups service.
* @module api/IamUserGroupsApi
* @version 3.0.0
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
      return this.apiClient.callApi(
        '/user-groups/{user_group_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
      return this.apiClient.callApi(
        '/user-groups/{user_group_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
      return this.apiClient.callApi(
        '/user-groups/{user_group_id}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
      return this.apiClient.callApi(
        '/user-groups/{user_group_id}/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
      return this.apiClient.callApi(
        '/user-groups/{user_group_id}/service-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
      return this.apiClient.callApi(
        '/user-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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


}
