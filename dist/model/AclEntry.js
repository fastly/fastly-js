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
 * The AclEntry model module.
 * @module model/AclEntry
 * @version 3.0.0-alpha1
 */
var AclEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AclEntry</code>.
   * @alias module:model/AclEntry
   */
  function AclEntry() {
    _classCallCheck(this, AclEntry);

    AclEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AclEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AclEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclEntry} obj Optional instance to populate.
     * @return {module:model/AclEntry} The populated <code>AclEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AclEntry();

        if (data.hasOwnProperty('negated')) {
          obj['negated'] = _ApiClient["default"].convertToType(data['negated'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('subnet')) {
          obj['subnet'] = _ApiClient["default"].convertToType(data['subnet'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AclEntry;
}();
/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/AclEntry.NegatedEnum} negated
 * @default NegatedEnum.0
 */


AclEntry.prototype['negated'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

AclEntry.prototype['comment'] = undefined;
/**
 * An IP address.
 * @member {String} ip
 */

AclEntry.prototype['ip'] = undefined;
/**
 * Number of bits for the subnet mask applied to the IP address.  For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses),  and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied.
 * @member {Number} subnet
 */

AclEntry.prototype['subnet'] = undefined;
/**
 * Allowed values for the <code>negated</code> property.
 * @enum {Number}
 * @readonly
 */

AclEntry['NegatedEnum'] = {
  /**
   * value: 0
   * @const
   */
  "0": 0,

  /**
   * value: 1
   * @const
   */
  "1": 1
};
var _default = AclEntry;
exports["default"] = _default;