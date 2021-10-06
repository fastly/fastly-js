"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TokenResponseAllOf model module.
 * @module model/TokenResponseAllOf
 * @version 3.0.0-alpha1
 */
var TokenResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenResponseAllOf</code>.
   * @alias module:model/TokenResponseAllOf
   */
  function TokenResponseAllOf() {
    _classCallCheck(this, TokenResponseAllOf);

    TokenResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TokenResponseAllOf} The populated <code>TokenResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenResponseAllOf();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
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

  return TokenResponseAllOf;
}();
/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */


TokenResponseAllOf.prototype['created_at'] = undefined;
/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */

TokenResponseAllOf.prototype['expires_at'] = undefined;
/**
 * Alphanumeric string identifying a token.
 * @member {String} id
 */

TokenResponseAllOf.prototype['id'] = undefined;
/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */

TokenResponseAllOf.prototype['ip'] = undefined;
/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */

TokenResponseAllOf.prototype['last_used_at'] = undefined;
/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */

TokenResponseAllOf.prototype['user_agent'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} user_id
 */

TokenResponseAllOf.prototype['user_id'] = undefined;
var _default = TokenResponseAllOf;
exports["default"] = _default;