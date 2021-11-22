"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsConfigurationTlsConfiguration = _interopRequireDefault(require("./RelationshipTlsConfigurationTlsConfiguration"));

var _RelationshipTlsConfigurations = _interopRequireDefault(require("./RelationshipTlsConfigurations"));

var _RelationshipTlsDomainTlsDomain = _interopRequireDefault(require("./RelationshipTlsDomainTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsBulkCertificate model module.
 * @module model/RelationshipsForTlsBulkCertificate
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsBulkCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsBulkCertificate</code>.
   * @alias module:model/RelationshipsForTlsBulkCertificate
   * @implements module:model/RelationshipTlsConfigurations
   */
  function RelationshipsForTlsBulkCertificate() {
    _classCallCheck(this, RelationshipsForTlsBulkCertificate);

    _RelationshipTlsConfigurations["default"].initialize(this);

    RelationshipsForTlsBulkCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsBulkCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsBulkCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsBulkCertificate} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsBulkCertificate} The populated <code>RelationshipsForTlsBulkCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsBulkCertificate();

        _RelationshipTlsConfigurations["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('tls_configurations')) {
          obj['tls_configurations'] = _RelationshipTlsConfigurationTlsConfiguration["default"].constructFromObject(data['tls_configurations']);
        }

        if (data.hasOwnProperty('tls_domains')) {
          obj['tls_domains'] = _RelationshipTlsDomainTlsDomain["default"].constructFromObject(data['tls_domains']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsBulkCertificate;
}();
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configurations
 */


RelationshipsForTlsBulkCertificate.prototype['tls_configurations'] = undefined;
/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domains
 */

RelationshipsForTlsBulkCertificate.prototype['tls_domains'] = undefined; // Implement RelationshipTlsConfigurations interface:

/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configurations
 */

_RelationshipTlsConfigurations["default"].prototype['tls_configurations'] = undefined;
var _default = RelationshipsForTlsBulkCertificate;
exports["default"] = _default;