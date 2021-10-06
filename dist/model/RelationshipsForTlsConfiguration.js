"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipService = _interopRequireDefault(require("./RelationshipService"));

var _RelationshipServiceService = _interopRequireDefault(require("./RelationshipServiceService"));

var _RelationshipTlsDnsRecordDnsRecord = _interopRequireDefault(require("./RelationshipTlsDnsRecordDnsRecord"));

var _RelationshipTlsDnsRecords = _interopRequireDefault(require("./RelationshipTlsDnsRecords"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsConfiguration model module.
 * @module model/RelationshipsForTlsConfiguration
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsConfiguration</code>.
   * @alias module:model/RelationshipsForTlsConfiguration
   */
  function RelationshipsForTlsConfiguration() {
    _classCallCheck(this, RelationshipsForTlsConfiguration);

    RelationshipsForTlsConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsConfiguration} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsConfiguration} The populated <code>RelationshipsForTlsConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsConfiguration();

        if (data.hasOwnProperty('service')) {
          obj['service'] = _RelationshipServiceService["default"].constructFromObject(data['service']);
        }

        if (data.hasOwnProperty('dns_records')) {
          obj['dns_records'] = _RelationshipTlsDnsRecordDnsRecord["default"].constructFromObject(data['dns_records']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsConfiguration;
}();
/**
 * @member {module:model/RelationshipServiceService} service
 */


RelationshipsForTlsConfiguration.prototype['service'] = undefined;
/**
 * @member {module:model/RelationshipTlsDnsRecordDnsRecord} dns_records
 */

RelationshipsForTlsConfiguration.prototype['dns_records'] = undefined;
var _default = RelationshipsForTlsConfiguration;
exports["default"] = _default;