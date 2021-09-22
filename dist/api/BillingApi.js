"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingEstimateResponse = _interopRequireDefault(require("../model/BillingEstimateResponse"));

var _BillingResponse = _interopRequireDefault(require("../model/BillingResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Billing service.
* @module api/BillingApi
* @version 3.0.0-alpha1
*/
var BillingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BillingApi. 
  * @alias module:api/BillingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BillingApi(apiClient) {
    _classCallCheck(this, BillingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.
   * @param {Object} options
   * @param {String} options.month - 2-digit month.
   * @param {String} options.year - 4-digit year.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingResponse} and HTTP response
   */


  _createClass(BillingApi, [{
    key: "getInvoiceWithHttpInfo",
    value: function getInvoiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'month' is set.

      if (options['month'] === undefined || options['month'] === null) {
        throw new Error("Missing the required parameter 'month'.");
      } // Verify the required parameter 'year' is set.


      if (options['year'] === undefined || options['year'] === null) {
        throw new Error("Missing the required parameter 'year'.");
      }

      var pathParams = {
        'month': options['month'],
        'year': options['year']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/pdf', 'text/csv'];
      var returnType = _BillingResponse["default"];
      return this.apiClient.callApi('/billing/v2/year/{year}/month/{month}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.
     * @param {Object} options
     * @param {String} options.month - 2-digit month.
     * @param {String} options.year - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingResponse}
     */

  }, {
    key: "getInvoice",
    value: function getInvoice() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getInvoiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the invoice for the given invoice_id.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {String} options.invoice_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getInvoiceByIdWithHttpInfo",
    value: function getInvoiceByIdWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      } // Verify the required parameter 'invoice_id' is set.


      if (options['invoice_id'] === undefined || options['invoice_id'] === null) {
        throw new Error("Missing the required parameter 'invoice_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id'],
        'invoice_id': options['invoice_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/pdf', 'text/csv'];
      var returnType = null;
      return this.apiClient.callApi('/billing/v2/account_customers/{customer_id}/invoices/{invoice_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the invoice for the given invoice_id.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {String} options.invoice_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getInvoiceById",
    value: function getInvoiceById() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getInvoiceByIdWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {String} [options.month] - 2-digit month.
     * @param {String} [options.year] - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingEstimateResponse} and HTTP response
     */

  }, {
    key: "getInvoiceMtdWithHttpInfo",
    value: function getInvoiceMtdWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {
        'month': options['month'],
        'year': options['year']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BillingEstimateResponse["default"];
      return this.apiClient.callApi('/billing/v2/account_customers/{customer_id}/mtd_invoice', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {String} [options.month] - 2-digit month.
     * @param {String} [options.year] - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingEstimateResponse}
     */

  }, {
    key: "getInvoiceMtd",
    value: function getInvoiceMtd() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getInvoiceMtdWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BillingApi;
}();

exports["default"] = BillingApi;