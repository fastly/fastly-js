"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsCertificate = _interopRequireDefault(require("../model/TlsCertificate"));

var _TlsCertificateResponse = _interopRequireDefault(require("../model/TlsCertificateResponse"));

var _TlsCertificatesResponse = _interopRequireDefault(require("../model/TlsCertificatesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsCertificates service.
* @module api/TlsCertificatesApi
* @version 3.0.0-alpha1
*/
var TlsCertificatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsCertificatesApi. 
  * @alias module:api/TlsCertificatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsCertificatesApi(apiClient) {
    _classCallCheck(this, TlsCertificatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a TLS certificate.
   * @param {Object} options
   * @param {module:model/TlsCertificate} [options.tls_certificate]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(TlsCertificatesApi, [{
    key: "createTlsCertWithHttpInfo",
    value: function createTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_certificate'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = Object;
      return this.apiClient.callApi('/tls/certificates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a TLS certificate.
     * @param {Object} options
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "createTlsCert",
    value: function createTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteTlsCertWithHttpInfo",
    value: function deleteTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_certificate_id' is set.

      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      var pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/certificates/{tls_certificate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTlsCert",
    value: function deleteTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show a TLS certificate.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificateResponse} and HTTP response
     */

  }, {
    key: "getTlsCertWithHttpInfo",
    value: function getTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_certificate_id' is set.

      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      var pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsCertificateResponse["default"];
      return this.apiClient.callApi('/tls/certificates/{tls_certificate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show a TLS certificate.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificateResponse}
     */

  }, {
    key: "getTlsCert",
    value: function getTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all TLS certificates.
     * @param {Object} options
     * @param {String} [options.filter_not_after] - Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned certificates to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificatesResponse} and HTTP response
     */

  }, {
    key: "listTlsCertsWithHttpInfo",
    value: function listTlsCertsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[not_after]': options['filter_not_after'],
        'filter[tls_domains.id]': options['filter_tls_domains_id'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsCertificatesResponse["default"];
      return this.apiClient.callApi('/tls/certificates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS certificates.
     * @param {Object} options
     * @param {String} [options.filter_not_after] - Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned certificates to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificatesResponse}
     */

  }, {
    key: "listTlsCerts",
    value: function listTlsCerts() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsCertsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificateResponse} and HTTP response
     */

  }, {
    key: "updateTlsCertWithHttpInfo",
    value: function updateTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_certificate']; // Verify the required parameter 'tls_certificate_id' is set.

      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      var pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsCertificateResponse["default"];
      return this.apiClient.callApi('/tls/certificates/{tls_certificate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.
     * @param {Object} options
     * @param {String} options.tls_certificate_id
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificateResponse}
     */

  }, {
    key: "updateTlsCert",
    value: function updateTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsCertificatesApi;
}();

exports["default"] = TlsCertificatesApi;