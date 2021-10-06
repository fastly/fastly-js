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
 * The SchemasUserResponseAllOf model module.
 * @module model/SchemasUserResponseAllOf
 * @version 3.0.0-alpha1
 */
var SchemasUserResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasUserResponseAllOf</code>.
   * @alias module:model/SchemasUserResponseAllOf
   */
  function SchemasUserResponseAllOf() {
    _classCallCheck(this, SchemasUserResponseAllOf);

    SchemasUserResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasUserResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasUserResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasUserResponseAllOf} obj Optional instance to populate.
     * @return {module:model/SchemasUserResponseAllOf} The populated <code>SchemasUserResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasUserResponseAllOf();

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('email_hash')) {
          obj['email_hash'] = _ApiClient["default"].convertToType(data['email_hash'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SchemasUserResponseAllOf;
}();
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */


SchemasUserResponseAllOf.prototype['customer_id'] = undefined;
/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */

SchemasUserResponseAllOf.prototype['email_hash'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} id
 */

SchemasUserResponseAllOf.prototype['id'] = undefined;
var _default = SchemasUserResponseAllOf;
exports["default"] = _default;