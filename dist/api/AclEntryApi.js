"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AclEntries = _interopRequireDefault(require("../model/AclEntries"));

var _AclEntry = _interopRequireDefault(require("../model/AclEntry"));

var _Timestamps = _interopRequireDefault(require("../model/Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AclEntry service.
* @module api/AclEntryApi
* @version 3.0.0-alpha1
*/
var AclEntryApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AclEntryApi. 
  * @alias module:api/AclEntryApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AclEntryApi(apiClient) {
    _classCallCheck(this, AclEntryApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Update multiple ACL entries on the same ACL.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {String} options.acl_id
   * @param {module:model/AclEntries} [options.acl_entries]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(AclEntryApi, [{
    key: "bulkUpdateAclEntriesWithHttpInfo",
    value: function bulkUpdateAclEntriesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['acl_entries']; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entries', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update multiple ACL entries on the same ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {module:model/AclEntries} [options.acl_entries]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "bulkUpdateAclEntries",
    value: function bulkUpdateAclEntries() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkUpdateAclEntriesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add an ACL entry to an ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "createAclEntryWithHttpInfo",
    value: function createAclEntryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['acl_entry']; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entry', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add an ACL entry to an ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "createAclEntry",
    value: function createAclEntry() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createAclEntryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an ACL entry from a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteAclEntryWithHttpInfo",
    value: function deleteAclEntryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      } // Verify the required parameter 'acl_entry_id' is set.


      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an ACL entry from a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteAclEntry",
    value: function deleteAclEntry() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteAclEntryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a single ACL entry.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclEntry} and HTTP response
     */

  }, {
    key: "getAclEntryWithHttpInfo",
    value: function getAclEntryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      } // Verify the required parameter 'acl_entry_id' is set.


      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AclEntry["default"];
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a single ACL entry.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclEntry}
     */

  }, {
    key: "getAclEntry",
    value: function getAclEntry() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getAclEntryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List ACL entries for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Timestamps>} and HTTP response
     */

  }, {
    key: "listAclEntriesWithHttpInfo",
    value: function listAclEntriesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
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
      var returnType = [_Timestamps["default"]];
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List ACL entries for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Timestamps>}
     */

  }, {
    key: "listAclEntries",
    value: function listAclEntries() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listAclEntriesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an ACL entry for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclEntry} and HTTP response
     */

  }, {
    key: "updateAclEntryWithHttpInfo",
    value: function updateAclEntryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['acl_entry']; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'acl_id' is set.


      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      } // Verify the required parameter 'acl_entry_id' is set.


      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AclEntry["default"];
      return this.apiClient.callApi('/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an ACL entry for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.acl_id
     * @param {String} options.acl_entry_id
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclEntry}
     */

  }, {
    key: "updateAclEntry",
    value: function updateAclEntry() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateAclEntryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AclEntryApi;
}();

exports["default"] = AclEntryApi;