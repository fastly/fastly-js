"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _Token = _interopRequireDefault(require("./Token"));

var _TokenResponseAllOf = _interopRequireDefault(require("./TokenResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 3.0.0-alpha1
 */
var TokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenResponse</code>.
   * @alias module:model/TokenResponse
   */
  function TokenResponse() {
    _classCallCheck(this, TokenResponse);

    TokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenResponse();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient["default"].convertToType(data['services'], ['String']);
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

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('last_used_at')) {
          obj['last_used_at'] = _ApiClient["default"].convertToType(data['last_used_at'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TokenResponse;
}();
/**
 * Name of the token.
 * @member {String} name
 */


TokenResponse.prototype['name'] = undefined;
/**
 * Space-delimited list of authorization scope.
 * @member {module:model/TokenResponse.ScopeEnum} scope
 * @default 'global'
 */

TokenResponse.prototype['scope'] = undefined;
/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */

TokenResponse.prototype['services'] = undefined;
/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */

TokenResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

TokenResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

TokenResponse.prototype['updated_at'] = undefined;
/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */

TokenResponse.prototype['expires_at'] = undefined;
/**
 * Alphanumeric string identifying a token.
 * @member {String} id
 */

TokenResponse.prototype['id'] = undefined;
/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */

TokenResponse.prototype['ip'] = undefined;
/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */

TokenResponse.prototype['last_used_at'] = undefined;
/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */

TokenResponse.prototype['user_agent'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} user_id
 */

TokenResponse.prototype['user_id'] = undefined;
/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */

TokenResponse['ScopeEnum'] = {
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
var _default = TokenResponse;
exports["default"] = _default;