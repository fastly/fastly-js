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
 * The Token model module.
 * @module model/Token
 * @version 3.0.0-alpha1
 */
var Token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Token</code>.
   * @alias module:model/Token
   */
  function Token() {
    _classCallCheck(this, Token);

    Token.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Token, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Token} obj Optional instance to populate.
     * @return {module:model/Token} The populated <code>Token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Token();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient["default"].convertToType(data['services'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Token;
}();
/**
 * Name of the token.
 * @member {String} name
 */


Token.prototype['name'] = undefined;
/**
 * Space-delimited list of authorization scope.
 * @member {module:model/Token.ScopeEnum} scope
 * @default 'global'
 */

Token.prototype['scope'] = undefined;
/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */

Token.prototype['services'] = undefined;
/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */

Token['ScopeEnum'] = {
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
var _default = Token;
exports["default"] = _default;