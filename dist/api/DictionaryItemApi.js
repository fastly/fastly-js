"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DictionaryItemResponse = _interopRequireDefault(require("../model/DictionaryItemResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DictionaryItem service.
* @module api/DictionaryItemApi
* @version 3.0.0-alpha1
*/
var DictionaryItemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DictionaryItemApi. 
  * @alias module:api/DictionaryItemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DictionaryItemApi(apiClient) {
    _classCallCheck(this, DictionaryItemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Update DictionaryItem in batch for given service, dictionary ID and key/value pairs for items.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {String} options.dictionary_id
   * @param {module:model/InlineObject4} [options.inline_object4]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(DictionaryItemApi, [{
    key: "bulkUpdateDictionaryItemWithHttpInfo",
    value: function bulkUpdateDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['inline_object4']; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/items', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update DictionaryItem in batch for given service, dictionary ID and key/value pairs for items.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {module:model/InlineObject4} [options.inline_object4]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "bulkUpdateDictionaryItem",
    value: function bulkUpdateDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkUpdateDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */

  }, {
    key: "createDictionaryItemWithHttpInfo",
    value: function createDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DictionaryItemResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/item', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */

  }, {
    key: "createDictionaryItem",
    value: function createDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete DictionaryItem given service, dictionary ID, and item key.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteDictionaryItemWithHttpInfo",
    value: function deleteDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      } // Verify the required parameter 'dictionary_item_key' is set.


      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete DictionaryItem given service, dictionary ID, and item key.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteDictionaryItem",
    value: function deleteDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a single DictionaryItem given service, dictionary ID and item key.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */

  }, {
    key: "getDictionaryItemWithHttpInfo",
    value: function getDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      } // Verify the required parameter 'dictionary_item_key' is set.


      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DictionaryItemResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a single DictionaryItem given service, dictionary ID and item key.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */

  }, {
    key: "getDictionaryItem",
    value: function getDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List of DictionaryItems given service and dictionary ID.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DictionaryItemResponse>} and HTTP response
     */

  }, {
    key: "listDictionaryItemsWithHttpInfo",
    value: function listDictionaryItemsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id']
      };
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
      var returnType = [_DictionaryItemResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List of DictionaryItems given service and dictionary ID.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DictionaryItemResponse>}
     */

  }, {
    key: "listDictionaryItems",
    value: function listDictionaryItems() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listDictionaryItemsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */

  }, {
    key: "updateDictionaryItemWithHttpInfo",
    value: function updateDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      } // Verify the required parameter 'dictionary_item_key' is set.


      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DictionaryItemResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */

  }, {
    key: "updateDictionaryItem",
    value: function updateDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Upsert DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryItemResponse} and HTTP response
     */

  }, {
    key: "upsertDictionaryItemWithHttpInfo",
    value: function upsertDictionaryItemWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      } // Verify the required parameter 'dictionary_item_key' is set.


      if (options['dictionary_item_key'] === undefined || options['dictionary_item_key'] === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'dictionary_id': options['dictionary_id'],
        'dictionary_item_key': options['dictionary_item_key']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _DictionaryItemResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Upsert DictionaryItem given service, dictionary ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.dictionary_id
     * @param {String} options.dictionary_item_key
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryItemResponse}
     */

  }, {
    key: "upsertDictionaryItem",
    value: function upsertDictionaryItem() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.upsertDictionaryItemWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DictionaryItemApi;
}();

exports["default"] = DictionaryItemApi;