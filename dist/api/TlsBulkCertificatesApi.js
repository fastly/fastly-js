"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsBulkCertificate = _interopRequireDefault(require("../model/TlsBulkCertificate"));

var _TlsBulkCertificateResponse = _interopRequireDefault(require("../model/TlsBulkCertificateResponse"));

var _TlsBulkCertificatesResponse = _interopRequireDefault(require("../model/TlsBulkCertificatesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsBulkCertificates service.
* @module api/TlsBulkCertificatesApi
* @version 3.0.0-alpha1
*/
var TlsBulkCertificatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsBulkCertificatesApi. 
  * @alias module:api/TlsBulkCertificatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsBulkCertificatesApi(apiClient) {
    _classCallCheck(this, TlsBulkCertificatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Destroy a certificate. This disables TLS for all domains listed as SAN entries.
   * @param {Object} options
   * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(TlsBulkCertificatesApi, [{
    key: "deleteBulkTlsCertWithHttpInfo",
    value: function deleteBulkTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'certificate_id' is set.

      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      var pathParams = {
        'certificate_id': options['certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/bulk/certificates/{certificate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Destroy a certificate. This disables TLS for all domains listed as SAN entries.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBulkTlsCert",
    value: function deleteBulkTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteBulkTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a single certificate.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */

  }, {
    key: "getTlsBulkCertWithHttpInfo",
    value: function getTlsBulkCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'certificate_id' is set.

      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      var pathParams = {
        'certificate_id': options['certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsBulkCertificateResponse["default"];
      return this.apiClient.callApi('/tls/bulk/certificates/{certificate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a single certificate.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */

  }, {
    key: "getTlsBulkCert",
    value: function getTlsBulkCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsBulkCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all certificates.
     * @param {Object} options
     * @param {String} [options.filter_tls_domain_id_match] - Filter certificates by their matching, fully-qualified domain name. Returns all partial matches. Must provide a value longer than 3 characters.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificatesResponse} and HTTP response
     */

  }, {
    key: "listTlsBulkCertsWithHttpInfo",
    value: function listTlsBulkCertsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[tls_domain.id][match]': options['filter_tls_domain_id_match'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsBulkCertificatesResponse["default"];
      return this.apiClient.callApi('/tls/bulk/certificates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all certificates.
     * @param {Object} options
     * @param {String} [options.filter_tls_domain_id_match] - Filter certificates by their matching, fully-qualified domain name. Returns all partial matches. Must provide a value longer than 3 characters.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificatesResponse}
     */

  }, {
    key: "listTlsBulkCerts",
    value: function listTlsBulkCerts() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsBulkCertsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */

  }, {
    key: "updateBulkTlsCertWithHttpInfo",
    value: function updateBulkTlsCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_bulk_certificate']; // Verify the required parameter 'certificate_id' is set.

      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      var pathParams = {
        'certificate_id': options['certificate_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsBulkCertificateResponse["default"];
      return this.apiClient.callApi('/tls/bulk/certificates/{certificate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */

  }, {
    key: "updateBulkTlsCert",
    value: function updateBulkTlsCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateBulkTlsCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.
     * @param {Object} options
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */

  }, {
    key: "uploadTlsBulkCertWithHttpInfo",
    value: function uploadTlsBulkCertWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_bulk_certificate'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsBulkCertificateResponse["default"];
      return this.apiClient.callApi('/tls/bulk/certificates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.
     * @param {Object} options
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */

  }, {
    key: "uploadTlsBulkCert",
    value: function uploadTlsBulkCert() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.uploadTlsBulkCertWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsBulkCertificatesApi;
}();

exports["default"] = TlsBulkCertificatesApi;