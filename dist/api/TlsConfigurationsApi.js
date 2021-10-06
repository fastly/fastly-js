"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("../model/Pagination"));

var _TlsConfiguration = _interopRequireDefault(require("../model/TlsConfiguration"));

var _TlsConfigurationResponse = _interopRequireDefault(require("../model/TlsConfigurationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsConfigurations service.
* @module api/TlsConfigurationsApi
* @version 3.0.0-alpha1
*/
var TlsConfigurationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsConfigurationsApi. 
  * @alias module:api/TlsConfigurationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsConfigurationsApi(apiClient) {
    _classCallCheck(this, TlsConfigurationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Show a TLS configuration.
   * @param {Object} options
   * @param {String} options.tls_configuration_id
   * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsConfigurationResponse} and HTTP response
   */


  _createClass(TlsConfigurationsApi, [{
    key: "getTlsConfigWithHttpInfo",
    value: function getTlsConfigWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_configuration_id' is set.

      if (options['tls_configuration_id'] === undefined || options['tls_configuration_id'] === null) {
        throw new Error("Missing the required parameter 'tls_configuration_id'.");
      }

      var pathParams = {
        'tls_configuration_id': options['tls_configuration_id']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsConfigurationResponse["default"];
      return this.apiClient.callApi('/tls/configurations/{tls_configuration_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsConfigurationResponse}
     */

  }, {
    key: "getTlsConfig",
    value: function getTlsConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsConfigWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all TLS configurations.
     * @param {Object} options
     * @param {String} [options.filter_bulk] - Optionally filters by the bulk attribute.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */

  }, {
    key: "listTlsConfigsWithHttpInfo",
    value: function listTlsConfigsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[bulk]': options['filter_bulk'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/tls/configurations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS configurations.
     * @param {Object} options
     * @param {String} [options.filter_bulk] - Optionally filters by the bulk attribute.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "listTlsConfigs",
    value: function listTlsConfigs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsConfigsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id
     * @param {module:model/TlsConfiguration} [options.tls_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsConfigurationResponse} and HTTP response
     */

  }, {
    key: "updateTlsConfigWithHttpInfo",
    value: function updateTlsConfigWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_configuration']; // Verify the required parameter 'tls_configuration_id' is set.

      if (options['tls_configuration_id'] === undefined || options['tls_configuration_id'] === null) {
        throw new Error("Missing the required parameter 'tls_configuration_id'.");
      }

      var pathParams = {
        'tls_configuration_id': options['tls_configuration_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsConfigurationResponse["default"];
      return this.apiClient.callApi('/tls/configurations/{tls_configuration_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id
     * @param {module:model/TlsConfiguration} [options.tls_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsConfigurationResponse}
     */

  }, {
    key: "updateTlsConfig",
    value: function updateTlsConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateTlsConfigWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsConfigurationsApi;
}();

exports["default"] = TlsConfigurationsApi;