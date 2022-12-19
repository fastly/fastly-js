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
* @version 3.0.1-alpha.1
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
        '/roles/{role_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
        '/roles/{role_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
        '/roles/{role_id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
        '/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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


}
