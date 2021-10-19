"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DomainResponse = _interopRequireDefault(require("../model/DomainResponse"));

var _ServiceDetail = _interopRequireDefault(require("../model/ServiceDetail"));

var _ServiceResponse = _interopRequireDefault(require("../model/ServiceResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Service service.
* @module api/ServiceApi
* @version 3.0.0-alpha1
*/
var ServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ServiceApi. 
  * @alias module:api/ServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ServiceApi(apiClient) {
    _classCallCheck(this, ServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a service.
   * @param {Object} options
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
   * @param {String} [options.name] - The name of the service.
   * @param {module:model/String} [options.type] - The type of this service.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceResponse} and HTTP response
   */


  _createClass(ServiceApi, [{
    key: "createServiceWithHttpInfo",
    value: function createServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'comment': options['comment'],
        'customer_id': options['customer_id'],
        'name': options['name'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ServiceResponse["default"];
      return this.apiClient.callApi('/service', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a service.
     * @param {Object} options
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @param {String} [options.name] - The name of the service.
     * @param {module:model/String} [options.type] - The type of this service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceResponse}
     */

  }, {
    key: "createService",
    value: function createService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteServiceWithHttpInfo",
    value: function deleteServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteService",
    value: function deleteService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific service by id.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceResponse} and HTTP response
     */

  }, {
    key: "getServiceWithHttpInfo",
    value: function getServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServiceResponse["default"];
      return this.apiClient.callApi('/service/{service_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific service by id.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceResponse}
     */

  }, {
    key: "getService",
    value: function getService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List detailed information on a specified service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceDetail} and HTTP response
     */

  }, {
    key: "getServiceDetailWithHttpInfo",
    value: function getServiceDetailWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServiceDetail["default"];
      return this.apiClient.callApi('/service/{service_id}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List detailed information on a specified service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceDetail}
     */

  }, {
    key: "getServiceDetail",
    value: function getServiceDetail() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getServiceDetailWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List the domains within a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DomainResponse>} and HTTP response
     */

  }, {
    key: "listServiceDomainsWithHttpInfo",
    value: function listServiceDomainsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DomainResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/domain', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List the domains within a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DomainResponse>}
     */

  }, {
    key: "listServiceDomains",
    value: function listServiceDomains() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listServiceDomainsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List services.
     * @param {Object} options
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServiceResponse>} and HTTP response
     */

  }, {
    key: "listServicesWithHttpInfo",
    value: function listServicesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': options['page'],
        'per_page': options['per_page'],
        'sort': options['sort'],
        'direction': options['direction']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ServiceResponse["default"]];
      return this.apiClient.callApi('/service', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List services.
     * @param {Object} options
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceResponse>}
     */

  }, {
    key: "listServices",
    value: function listServices() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listServicesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific service by name.
     * @param {Object} options
     * @param {String} options.name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceResponse} and HTTP response
     */

  }, {
    key: "searchServiceWithHttpInfo",
    value: function searchServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'name' is set.

      if (options['name'] === undefined || options['name'] === null) {
        throw new Error("Missing the required parameter 'name'.");
      }

      var pathParams = {};
      var queryParams = {
        'name': options['name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServiceResponse["default"];
      return this.apiClient.callApi('/service/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific service by name.
     * @param {Object} options
     * @param {String} options.name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceResponse}
     */

  }, {
    key: "searchService",
    value: function searchService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.searchServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @param {String} [options.name] - The name of the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceResponse} and HTTP response
     */

  }, {
    key: "updateServiceWithHttpInfo",
    value: function updateServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'comment': options['comment'],
        'customer_id': options['customer_id'],
        'name': options['name']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ServiceResponse["default"];
      return this.apiClient.callApi('/service/{service_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.customer_id] - Alphanumeric string identifying the customer.
     * @param {String} [options.name] - The name of the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceResponse}
     */

  }, {
    key: "updateService",
    value: function updateService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ServiceApi;
}();

exports["default"] = ServiceApi;