"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Invitation = _interopRequireDefault(require("../model/Invitation"));

var _InvitationResponse = _interopRequireDefault(require("../model/InvitationResponse"));

var _InvitationsResponse = _interopRequireDefault(require("../model/InvitationsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Invitations service.
* @module api/InvitationsApi
* @version 3.0.0-alpha1
*/
var InvitationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InvitationsApi. 
  * @alias module:api/InvitationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InvitationsApi(apiClient) {
    _classCallCheck(this, InvitationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an invitation.
   * @param {Object} options
   * @param {module:model/Invitation} [options.invitation]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvitationResponse} and HTTP response
   */


  _createClass(InvitationsApi, [{
    key: "createInvitationWithHttpInfo",
    value: function createInvitationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['invitation'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _InvitationResponse["default"];
      return this.apiClient.callApi('/invitations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an invitation.
     * @param {Object} options
     * @param {module:model/Invitation} [options.invitation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvitationResponse}
     */

  }, {
    key: "createInvitation",
    value: function createInvitation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createInvitationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an invitation.
     * @param {Object} options
     * @param {String} options.invitation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteInvitationWithHttpInfo",
    value: function deleteInvitationWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'invitation_id' is set.

      if (options['invitation_id'] === undefined || options['invitation_id'] === null) {
        throw new Error("Missing the required parameter 'invitation_id'.");
      }

      var pathParams = {
        'invitation_id': options['invitation_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/invitations/{invitation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an invitation.
     * @param {Object} options
     * @param {String} options.invitation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteInvitation",
    value: function deleteInvitation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteInvitationWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all invitations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvitationsResponse} and HTTP response
     */

  }, {
    key: "listInvitationsWithHttpInfo",
    value: function listInvitationsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _InvitationsResponse["default"];
      return this.apiClient.callApi('/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all invitations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvitationsResponse}
     */

  }, {
    key: "listInvitations",
    value: function listInvitations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listInvitationsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InvitationsApi;
}();

exports["default"] = InvitationsApi;