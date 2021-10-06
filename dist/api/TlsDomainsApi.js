"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("../model/Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsDomains service.
* @module api/TlsDomainsApi
* @version 3.0.0-alpha1
*/
var TlsDomainsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsDomainsApi. 
  * @alias module:api/TlsDomainsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsDomainsApi(apiClient) {
    _classCallCheck(this, TlsDomainsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * List all TLS domains.
   * @param {Object} options
   * @param {String} [options.filter_in_use] - Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \"in use\") Permitted values: true, false.
   * @param {String} [options.filter_tls_certificates_id] - Optional. Limit the returned domains to those listed in the given TLS certificate's SAN list.
   * @param {String} [options.filter_tls_subscriptions_id] - Optional. Limit the returned domains to those for a given TLS subscription.
   * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, `tls_subscriptions.tls_authorizations`, and `tls_authorizations.globalsign_email_challenge`. 
   * @param {Number} [options.page_number] - Current page.
   * @param {Number} [options.page_size=20] - Number of records per page.
   * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
   */


  _createClass(TlsDomainsApi, [{
    key: "listTlsDomainsWithHttpInfo",
    value: function listTlsDomainsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[in_use]': options['filter_in_use'],
        'filter[tls_certificates.id]': options['filter_tls_certificates_id'],
        'filter[tls_subscriptions.id]': options['filter_tls_subscriptions_id'],
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
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/tls/domains', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS domains.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \"in use\") Permitted values: true, false.
     * @param {String} [options.filter_tls_certificates_id] - Optional. Limit the returned domains to those listed in the given TLS certificate's SAN list.
     * @param {String} [options.filter_tls_subscriptions_id] - Optional. Limit the returned domains to those for a given TLS subscription.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, `tls_subscriptions.tls_authorizations`, and `tls_authorizations.globalsign_email_challenge`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "listTlsDomains",
    value: function listTlsDomains() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsDomainsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsDomainsApi;
}();

exports["default"] = TlsDomainsApi;