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
import IamV1RoleListResponse from '../model/IamV1RoleListResponse';
import IamV1RoleResponse from '../model/IamV1RoleResponse';

/**
* IamRoles service.
* @module api/IamRolesApi
* @version 15.0.0-beta.4
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
     * Retrieve a single IAM role by its unique identifier. 
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {module:model/String} [options.include] - Include related data (i.e., permissions).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IamV1RoleResponse} and HTTP response
     */
    iamV1RolesGetWithHttpInfo(options = {}) {
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
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IamV1RoleResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/iam/v1/roles/{role_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single IAM role by its unique identifier. 
     * @param {Object} options
     * @param {String} options.role_id - Alphanumeric string identifying the role.
     * @param {module:model/String} [options.include] - Include related data (i.e., permissions).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IamV1RoleResponse}
     */
    iamV1RolesGet(options = {}) {
      return this.iamV1RolesGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a paginated list of IAM roles available in the account. 
     * @param {Object} options
     * @param {Number} [options.limit=100] - Number of results per page. The maximum is 1000.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IamV1RoleListResponse} and HTTP response
     */
    iamV1RolesListWithHttpInfo(options = {}) {
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
      let accepts = ['application/json'];
      let returnType = IamV1RoleListResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/iam/v1/roles', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a paginated list of IAM roles available in the account. 
     * @param {Object} options
     * @param {Number} [options.limit=100] - Number of results per page. The maximum is 1000.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IamV1RoleListResponse}
     */
    iamV1RolesList(options = {}) {
      return this.iamV1RolesListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
