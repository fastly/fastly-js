"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeTlsDnsRecord = _interopRequireDefault(require("./TypeTlsDnsRecord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberTlsDnsRecord model module.
 * @module model/RelationshipMemberTlsDnsRecord
 * @version 3.0.0-alpha1
 */
var RelationshipMemberTlsDnsRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberTlsDnsRecord</code>.
   * @alias module:model/RelationshipMemberTlsDnsRecord
   */
  function RelationshipMemberTlsDnsRecord() {
    _classCallCheck(this, RelationshipMemberTlsDnsRecord);

    RelationshipMemberTlsDnsRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberTlsDnsRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberTlsDnsRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberTlsDnsRecord} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberTlsDnsRecord} The populated <code>RelationshipMemberTlsDnsRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberTlsDnsRecord();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsDnsRecord["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberTlsDnsRecord;
}();
/**
 * The IP address or hostname of the DNS record.
 * @member {String} id
 */


RelationshipMemberTlsDnsRecord.prototype['id'] = undefined;
/**
 * @member {module:model/TypeTlsDnsRecord} type
 */

RelationshipMemberTlsDnsRecord.prototype['type'] = undefined;
var _default = RelationshipMemberTlsDnsRecord;
exports["default"] = _default;