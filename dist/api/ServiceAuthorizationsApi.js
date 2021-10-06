"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse204"));

var _Pagination = _interopRequireDefault(require("../model/Pagination"));

var _ServiceAuthorization = _interopRequireDefault(require("../model/ServiceAuthorization"));

var _ServiceAuthorizationResponse = _interopRequireDefault(require("../model/ServiceAuthorizationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ServiceAuthorizations service.
* @module api/ServiceAuthorizationsApi
* @version 3.0.0-alpha1
*/
var ServiceAuthorizationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ServiceAuthorizationsApi. 
  * @alias module:api/ServiceAuthorizationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ServiceAuthorizationsApi(apiClient) {
    _classCallCheck(this, ServiceAuthorizationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create service authorization.
   * @param {Object} options
   * @param {module:model/ServiceAuthorization} [options.service_authorization]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
   */


  _createClass(ServiceAuthorizationsApi, [{
    key: "createServiceAuthorizationWithHttpInfo",
    value: function createServiceAuthorizationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['service_authorization'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _ServiceAuthorizationResponse["default"];
      return this.apiClient.callApi('/service-authorizations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create service authorization.
     * @param {Object} options
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */

  }, {
    key: "createServiceAuthorization",
    value: function createServiceAuthorization() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createServiceAuthorizationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteServiceAuthorizationWithHttpInfo",
    value: function deleteServiceAuthorizationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_authorization_id' is set.

      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      var pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/service-authorizations/{service_authorization_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteServiceAuthorization",
    value: function deleteServiceAuthorization() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteServiceAuthorizationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete service authorizations.
     * @param {Object} options
     * @param {module:model/InlineObject2} [options.inline_object2]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse204} and HTTP response
     */

  }, {
    key: "deleteServiceAuthorization2WithHttpInfo",
    value: function deleteServiceAuthorization2WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['inline_object2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json; ext=bulk'];
      var accepts = ['application/vnd.api+json; ext=bulk'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/service-authorizations', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete service authorizations.
     * @param {Object} options
     * @param {module:model/InlineObject2} [options.inline_object2]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse204}
     */

  }, {
    key: "deleteServiceAuthorization2",
    value: function deleteServiceAuthorization2() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteServiceAuthorization2WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List service authorizations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */

  }, {
    key: "listServiceAuthorizationWithHttpInfo",
    value: function listServiceAuthorizationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/service-authorizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List service authorizations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "listServiceAuthorization",
    value: function listServiceAuthorization() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listServiceAuthorizationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
     */

  }, {
    key: "showServiceAuthorizationWithHttpInfo",
    value: function showServiceAuthorizationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_authorization_id' is set.

      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      var pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _ServiceAuthorizationResponse["default"];
      return this.apiClient.callApi('/service-authorizations/{service_authorization_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */

  }, {
    key: "showServiceAuthorization",
    value: function showServiceAuthorization() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.showServiceAuthorizationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
     */

  }, {
    key: "updateServiceAuthorizationWithHttpInfo",
    value: function updateServiceAuthorizationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['service_authorization']; // Verify the required parameter 'service_authorization_id' is set.

      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      var pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _ServiceAuthorizationResponse["default"];
      return this.apiClient.callApi('/service-authorizations/{service_authorization_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */

  }, {
    key: "updateServiceAuthorization",
    value: function updateServiceAuthorization() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateServiceAuthorizationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update service authorizations.
     * @param {Object} options
     * @param {module:model/InlineObject3} [options.inline_object3]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */

  }, {
    key: "updateServiceAuthorization2WithHttpInfo",
    value: function updateServiceAuthorization2WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['inline_object3'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json; ext=bulk'];
      var accepts = ['application/vnd.api+json; ext=bulk'];
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/service-authorizations', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update service authorizations.
     * @param {Object} options
     * @param {module:model/InlineObject3} [options.inline_object3]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "updateServiceAuthorization2",
    value: function updateServiceAuthorization2() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateServiceAuthorization2WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ServiceAuthorizationsApi;
}();

exports["default"] = ServiceAuthorizationsApi;