"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TokenCreatedResponseAllOf = _interopRequireDefault(require("./TokenCreatedResponseAllOf"));

var _TokenResponse = _interopRequireDefault(require("./TokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TokenCreatedResponse model module.
 * @module model/TokenCreatedResponse
 * @version 3.0.0-alpha1
 */
var TokenCreatedResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenCreatedResponse</code>.
   * @alias module:model/TokenCreatedResponse
   * @implements module:model/TokenResponse
   * @implements module:model/TokenCreatedResponseAllOf
   */
  function TokenCreatedResponse() {
    _classCallCheck(this, TokenCreatedResponse);

    _TokenResponse["default"].initialize(this);

    _TokenCreatedResponseAllOf["default"].initialize(this);

    TokenCreatedResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenCreatedResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenCreatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenCreatedResponse} obj Optional instance to populate.
     * @return {module:model/TokenCreatedResponse} The populated <code>TokenCreatedResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenCreatedResponse();

        _TokenResponse["default"].constructFromObject(data, obj);

        _TokenCreatedResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient["default"].convertToType(data['services'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('last_used_at')) {
          obj['last_used_at'] = _ApiClient["default"].convertToType(data['last_used_at'], 'String');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TokenCreatedResponse;
}();
/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */


TokenCreatedResponse.prototype['services'] = undefined;
/**
 * Name of the token.
 * @member {String} name
 */

TokenCreatedResponse.prototype['name'] = undefined;
/**
 * Space-delimited list of authorization scope.
 * @member {module:model/TokenCreatedResponse.ScopeEnum} scope
 * @default 'global'
 */

TokenCreatedResponse.prototype['scope'] = undefined;
/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */

TokenCreatedResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

TokenCreatedResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

TokenCreatedResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a token.
 * @member {String} id
 */

TokenCreatedResponse.prototype['id'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} user_id
 */

TokenCreatedResponse.prototype['user_id'] = undefined;
/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */

TokenCreatedResponse.prototype['last_used_at'] = undefined;
/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */

TokenCreatedResponse.prototype['expires_at'] = undefined;
/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */

TokenCreatedResponse.prototype['ip'] = undefined;
/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */

TokenCreatedResponse.prototype['user_agent'] = undefined;
/**
 * The alphanumeric string for accessing the API (only available on token creation).
 * @member {String} access_token
 */

TokenCreatedResponse.prototype['access_token'] = undefined; // Implement TokenResponse interface:

/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */

_TokenResponse["default"].prototype['services'] = undefined;
/**
 * Name of the token.
 * @member {String} name
 */

_TokenResponse["default"].prototype['name'] = undefined;
/**
 * Space-delimited list of authorization scope.
 * @member {module:model/TokenResponse.ScopeEnum} scope
 * @default 'global'
 */

_TokenResponse["default"].prototype['scope'] = undefined;
/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */

_TokenResponse["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_TokenResponse["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_TokenResponse["default"].prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a token.
 * @member {String} id
 */

_TokenResponse["default"].prototype['id'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} user_id
 */

_TokenResponse["default"].prototype['user_id'] = undefined;
/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */

_TokenResponse["default"].prototype['last_used_at'] = undefined;
/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */

_TokenResponse["default"].prototype['expires_at'] = undefined;
/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */

_TokenResponse["default"].prototype['ip'] = undefined;
/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */

_TokenResponse["default"].prototype['user_agent'] = undefined; // Implement TokenCreatedResponseAllOf interface:

/**
 * The alphanumeric string for accessing the API (only available on token creation).
 * @member {String} access_token
 */

_TokenCreatedResponseAllOf["default"].prototype['access_token'] = undefined;
/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */

TokenCreatedResponse['ScopeEnum'] = {
  /**
   * value: "global"
   * @const
   */
  "global": "global",

  /**
   * value: "purge_select"
   * @const
   */
  "purge_select": "purge_select",

  /**
   * value: "purge_all"
   * @const
   */
  "purge_all": "purge_all",

  /**
   * value: "global:read"
   * @const
   */
  "global:read": "global:read"
};
var _default = TokenCreatedResponse;
exports["default"] = _default;