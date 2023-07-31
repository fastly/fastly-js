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
import InlineResponse200 from '../model/InlineResponse200';
import RoleUser from '../model/RoleUser';
import UserResponse from '../model/UserResponse';

/**
* User service.
* @module api/UserApi
* @version 6.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
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
     * Create a user.
     * @param {Object} options
     * @param {String} [options.login]
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    createUserWithHttpInfo(options = {}) {
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
        'login': options['login'],
        'name': options['name'],
        'limit_services': options['limit_services'],
        'locked': options['locked'],
        'require_new_password': options['require_new_password'],
        'role': options['role'],
        'two_factor_auth_enabled': options['two_factor_auth_enabled'],
        'two_factor_setup_required': options['two_factor_setup_required']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a user.
     * @param {Object} options
     * @param {String} [options.login]
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    createUser(options = {}) {
      return this.createUserWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a user.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteUserWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_id' is set.
      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      let pathParams = {
        'user_id': options['user_id']
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
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/user/{user_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a user.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteUser(options = {}) {
      return this.deleteUserWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the logged in user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    getCurrentUserWithHttpInfo(options = {}) {
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
      let returnType = UserResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/current_user', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the logged in user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    getCurrentUser(options = {}) {
      return this.getCurrentUserWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific user.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    getUserWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_id' is set.
      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      let pathParams = {
        'user_id': options['user_id']
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
      let returnType = UserResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/user/{user_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific user.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    getUser(options = {}) {
      return this.getUserWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Requests a password reset for the specified user.
     * @param {Object} options
     * @param {String} options.user_login - The login associated with the user (typically, an email address).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    requestPasswordResetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_login' is set.
      if (options['user_login'] === undefined || options['user_login'] === null) {
        throw new Error("Missing the required parameter 'user_login'.");
      }

      let pathParams = {
        'user_login': options['user_login']
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
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/user/{user_login}/password/request_reset', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Requests a password reset for the specified user.
     * @param {Object} options
     * @param {String} options.user_login - The login associated with the user (typically, an email address).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    requestPasswordReset(options = {}) {
      return this.requestPasswordResetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Two-factor attributes are not editable via this endpoint.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @param {String} [options.login]
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    updateUserWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'user_id' is set.
      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      let pathParams = {
        'user_id': options['user_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'login': options['login'],
        'name': options['name'],
        'limit_services': options['limit_services'],
        'locked': options['locked'],
        'require_new_password': options['require_new_password'],
        'role': options['role'],
        'two_factor_auth_enabled': options['two_factor_auth_enabled'],
        'two_factor_setup_required': options['two_factor_setup_required']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/user/{user_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Two-factor attributes are not editable via this endpoint.
     * @param {Object} options
     * @param {String} options.user_id - Alphanumeric string identifying the user.
     * @param {String} [options.login]
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    updateUser(options = {}) {
      return this.updateUserWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the user's password to a new one.
     * @param {Object} options
     * @param {String} [options.old_password] - The user's current password.
     * @param {String} [options.new_password] - The user's new password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponse} and HTTP response
     */
    updateUserPasswordWithHttpInfo(options = {}) {
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
        'old_password': options['old_password'],
        'new_password': options['new_password']
      };

      let authNames = ['session_password_change'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/current_user/password', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the user's password to a new one.
     * @param {Object} options
     * @param {String} [options.old_password] - The user's current password.
     * @param {String} [options.new_password] - The user's new password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponse}
     */
    updateUserPassword(options = {}) {
      return this.updateUserPasswordWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
