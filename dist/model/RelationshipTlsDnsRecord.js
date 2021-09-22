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
 * The RelationshipTlsDnsRecord model module.
 * @module model/RelationshipTlsDnsRecord
 * @version 3.0.0-alpha1
 */
var RelationshipTlsDnsRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsDnsRecord</code>.
   * @alias module:model/RelationshipTlsDnsRecord
   */
  function RelationshipTlsDnsRecord() {
    _classCallCheck(this, RelationshipTlsDnsRecord);

    RelationshipTlsDnsRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsDnsRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsDnsRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsDnsRecord} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsDnsRecord} The populated <code>RelationshipTlsDnsRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsDnsRecord();

        if (data.hasOwnProperty('dns_record')) {
          obj['dns_record'] = _RelationshipTlsDnsRecordDnsRecord["default"].constructFromObject(data['dns_record']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsDnsRecord;
}();
/**
 * @member {module:model/RelationshipTlsDnsRecordDnsRecord} dns_record
 */


RelationshipTlsDnsRecord.prototype['dns_record'] = undefined;
var _default = RelationshipTlsDnsRecord;
exports["default"] = _default;