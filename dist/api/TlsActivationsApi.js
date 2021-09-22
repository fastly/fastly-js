"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsActivation = _interopRequireDefault(require("../model/TlsActivation"));

var _TlsActivationResponse = _interopRequireDefault(require("../model/TlsActivationResponse"));

var _TlsActivationsResponse = _interopRequireDefault(require("../model/TlsActivationsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsActivations service.
* @module api/TlsActivationsApi
* @version 3.0.0-alpha1
*/
var TlsActivationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsActivationsApi. 
  * @alias module:api/TlsActivationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsActivationsApi(apiClient) {
    _classCallCheck(this, TlsActivationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.
   * @param {Object} options
   * @param {module:model/TlsActivation} [options.tls_activation]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
   */


  _createClass(TlsActivationsApi, [{
    key: "createTlsActivationWithHttpInfo",
    value: function createTlsActivationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_activation'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsActivationResponse["default"];
      return this.apiClient.callApi('/tls/activations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.
     * @param {Object} options
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */

  }, {
    key: "createTlsActivation",
    value: function createTlsActivation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createTlsActivationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Disable TLS on the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteTlsActivationWithHttpInfo",
    value: function deleteTlsActivationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_activation_id' is set.

      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      var pathParams = {
        'tls_activation_id': options['tls_activation_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/activations/{tls_activation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Disable TLS on the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTlsActivation",
    value: function deleteTlsActivation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteTlsActivationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show a TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
     */

  }, {
    key: "getTlsActivationWithHttpInfo",
    value: function getTlsActivationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_activation_id' is set.

      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      var pathParams = {
        'tls_activation_id': options['tls_activation_id']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsActivationResponse["default"];
      return this.apiClient.callApi('/tls/activations/{tls_activation_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show a TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */

  }, {
    key: "getTlsActivation",
    value: function getTlsActivation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsActivationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all TLS activations.
     * @param {Object} options
     * @param {String} [options.filter_tls_certificate_id] - Limit the returned activations to a specific certificate.
     * @param {String} [options.filter_tls_configuration_id] - Limit the returned activations to a specific TLS configuration.
     * @param {String} [options.filter_tls_domain_id] - Limit the returned rules to a specific domain name.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationsResponse} and HTTP response
     */

  }, {
    key: "listTlsActivationsWithHttpInfo",
    value: function listTlsActivationsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[tls_certificate.id]': options['filter_tls_certificate_id'],
        'filter[tls_configuration.id]': options['filter_tls_configuration_id'],
        'filter[tls_domain.id]': options['filter_tls_domain_id'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsActivationsResponse["default"];
      return this.apiClient.callApi('/tls/activations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS activations.
     * @param {Object} options
     * @param {String} [options.filter_tls_certificate_id] - Limit the returned activations to a specific certificate.
     * @param {String} [options.filter_tls_configuration_id] - Limit the returned activations to a specific TLS configuration.
     * @param {String} [options.filter_tls_domain_id] - Limit the returned rules to a specific domain name.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationsResponse}
     */

  }, {
    key: "listTlsActivations",
    value: function listTlsActivations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsActivationsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
     */

  }, {
    key: "updateTlsActivationWithHttpInfo",
    value: function updateTlsActivationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_activation']; // Verify the required parameter 'tls_activation_id' is set.

      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      var pathParams = {
        'tls_activation_id': options['tls_activation_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsActivationResponse["default"];
      return this.apiClient.callApi('/tls/activations/{tls_activation_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */

  }, {
    key: "updateTlsActivation",
    value: function updateTlsActivation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateTlsActivationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsActivationsApi;
}();

exports["default"] = TlsActivationsApi;