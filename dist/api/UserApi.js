"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RoleUser = _interopRequireDefault(require("../model/RoleUser"));

var _Timestamps = _interopRequireDefault(require("../model/Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 3.0.0-alpha1
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a user.
   * @param {Object} options
   * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
   * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
   * @param {String} [options.login] - The login associated with the user (typically, an email address).
   * @param {String} [options.name] - The real life name of the user.
   * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
   * @param {module:model/RoleUser} [options.role]
   * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
   * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
   */


  _createClass(UserApi, [{
    key: "createUserWithHttpInfo",
    value: function createUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'limit_services': options['limit_services'],
        'locked': options['locked'],
        'login': options['login'],
        'name': options['name'],
        'require_new_password': options['require_new_password'],
        'role': options['role'],
        'two_factor_auth_enabled': options['two_factor_auth_enabled'],
        'two_factor_setup_required': options['two_factor_setup_required']
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a user.
     * @param {Object} options
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {String} [options.login] - The login associated with the user (typically, an email address).
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "createUser",
    value: function createUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a user.
     * @param {Object} options
     * @param {String} options.user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteUserWithHttpInfo",
    value: function deleteUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'user_id' is set.

      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      var pathParams = {
        'user_id': options['user_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/user/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a user.
     * @param {Object} options
     * @param {String} options.user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteUser",
    value: function deleteUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the logged in user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "getCurrentUserWithHttpInfo",
    value: function getCurrentUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/current_user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the logged in user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getCurrentUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific user.
     * @param {Object} options
     * @param {String} options.user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'user_id' is set.

      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      var pathParams = {
        'user_id': options['user_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/user/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific user.
     * @param {Object} options
     * @param {String} options.user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "getUser",
    value: function getUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Requests a password reset for the specified user.
     * @param {Object} options
     * @param {String} options.user_login
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "requestPasswordResetWithHttpInfo",
    value: function requestPasswordResetWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'user_login' is set.

      if (options['user_login'] === undefined || options['user_login'] === null) {
        throw new Error("Missing the required parameter 'user_login'.");
      }

      var pathParams = {
        'user_login': options['user_login']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/user/{user_login}/password/request_reset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Requests a password reset for the specified user.
     * @param {Object} options
     * @param {String} options.user_login
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "requestPasswordReset",
    value: function requestPasswordReset() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.requestPasswordResetWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Modifications to `login` email require a valid password in the request body. Two-factor attributes are not editable via this endpoint.
     * @param {Object} options
     * @param {String} options.user_id
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {String} [options.login] - The login associated with the user (typically, an email address).
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "updateUserWithHttpInfo",
    value: function updateUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'user_id' is set.

      if (options['user_id'] === undefined || options['user_id'] === null) {
        throw new Error("Missing the required parameter 'user_id'.");
      }

      var pathParams = {
        'user_id': options['user_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'limit_services': options['limit_services'],
        'locked': options['locked'],
        'login': options['login'],
        'name': options['name'],
        'require_new_password': options['require_new_password'],
        'role': options['role'],
        'two_factor_auth_enabled': options['two_factor_auth_enabled'],
        'two_factor_setup_required': options['two_factor_setup_required']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/user/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Modifications to `login` email require a valid password in the request body. Two-factor attributes are not editable via this endpoint.
     * @param {Object} options
     * @param {String} options.user_id
     * @param {Boolean} [options.limit_services] - Indicates that the user has limited access to the customer's services.
     * @param {Boolean} [options.locked] - Indicates whether the is account is locked for editing or not.
     * @param {String} [options.login] - The login associated with the user (typically, an email address).
     * @param {String} [options.name] - The real life name of the user.
     * @param {Boolean} [options.require_new_password] - Indicates if a new password is required at next login.
     * @param {module:model/RoleUser} [options.role]
     * @param {Boolean} [options.two_factor_auth_enabled] - Indicates if 2FA is enabled on the user.
     * @param {Boolean} [options.two_factor_setup_required] - Indicates if 2FA is required by the user's customer account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "updateUser",
    value: function updateUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the user's password to a new one.
     * @param {Object} options
     * @param {String} [options.new_password] - The user's new password.
     * @param {String} [options.old_password] - The user's current password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "updateUserPasswordWithHttpInfo",
    value: function updateUserPasswordWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'new_password': options['new_password'],
        'old_password': options['old_password']
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/current_user/password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the user's password to a new one.
     * @param {Object} options
     * @param {String} [options.new_password] - The user's new password.
     * @param {String} [options.old_password] - The user's current password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "updateUserPassword",
    value: function updateUserPassword() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateUserPasswordWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;