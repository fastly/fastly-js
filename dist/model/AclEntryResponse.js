"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AclEntry = _interopRequireDefault(require("./AclEntry"));

var _AclEntryResponseAllOf = _interopRequireDefault(require("./AclEntryResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AclEntryResponse model module.
 * @module model/AclEntryResponse
 * @version 3.0.0-alpha1
 */
var AclEntryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AclEntryResponse</code>.
   * @alias module:model/AclEntryResponse
   */
  function AclEntryResponse() {
    _classCallCheck(this, AclEntryResponse);

    AclEntryResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AclEntryResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AclEntryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclEntryResponse} obj Optional instance to populate.
     * @return {module:model/AclEntryResponse} The populated <code>AclEntryResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AclEntryResponse();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('negated')) {
          obj['negated'] = _ApiClient["default"].convertToType(data['negated'], 'Number');
        }

        if (data.hasOwnProperty('subnet')) {
          obj['subnet'] = _ApiClient["default"].convertToType(data['subnet'], 'Number');
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

        if (data.hasOwnProperty('acl_id')) {
          obj['acl_id'] = _ApiClient["default"].convertToType(data['acl_id'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AclEntryResponse;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


AclEntryResponse.prototype['comment'] = undefined;
/**
 * An IP address.
 * @member {String} ip
 */

AclEntryResponse.prototype['ip'] = undefined;
/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/AclEntryResponse.NegatedEnum} negated
 * @default NegatedEnum.0
 */

AclEntryResponse.prototype['negated'] = undefined;
/**
 * Number of bits for the subnet mask applied to the IP address.  For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses),  and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied.
 * @member {Number} subnet
 */

AclEntryResponse.prototype['subnet'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

AclEntryResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

AclEntryResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

AclEntryResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a ACL.
 * @member {String} acl_id
 */

AclEntryResponse.prototype['acl_id'] = undefined;
/**
 * Alphanumeric string identifying an ACL Entry.
 * @member {String} id
 */

AclEntryResponse.prototype['id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

AclEntryResponse.prototype['service_id'] = undefined;
/**
 * Allowed values for the <code>negated</code> property.
 * @enum {Number}
 * @readonly
 */

AclEntryResponse['NegatedEnum'] = {
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
var _default = AclEntryResponse;
exports["default"] = _default;