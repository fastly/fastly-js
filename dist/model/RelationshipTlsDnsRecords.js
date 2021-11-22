"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsDnsRecordDnsRecord = _interopRequireDefault(require("./RelationshipTlsDnsRecordDnsRecord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsDnsRecords model module.
 * @module model/RelationshipTlsDnsRecords
 * @version 3.0.0-alpha1
 */
var RelationshipTlsDnsRecords = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsDnsRecords</code>.
   * @alias module:model/RelationshipTlsDnsRecords
   */
  function RelationshipTlsDnsRecords() {
    _classCallCheck(this, RelationshipTlsDnsRecords);

    RelationshipTlsDnsRecords.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsDnsRecords, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsDnsRecords</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsDnsRecords} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsDnsRecords} The populated <code>RelationshipTlsDnsRecords</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsDnsRecords();

        if (data.hasOwnProperty('dns_records')) {
          obj['dns_records'] = _RelationshipTlsDnsRecordDnsRecord["default"].constructFromObject(data['dns_records']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsDnsRecords;
}();
/**
 * @member {module:model/RelationshipTlsDnsRecordDnsRecord} dns_records
 */


RelationshipTlsDnsRecords.prototype['dns_records'] = undefined;
var _default = RelationshipTlsDnsRecords;
exports["default"] = _default;