"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsCertificateTlsCertificate = _interopRequireDefault(require("./RelationshipTlsCertificateTlsCertificate"));

var _RelationshipTlsCertificates = _interopRequireDefault(require("./RelationshipTlsCertificates"));

var _RelationshipTlsConfigurationTlsConfiguration = _interopRequireDefault(require("./RelationshipTlsConfigurationTlsConfiguration"));

var _RelationshipTlsDomainTlsDomain = _interopRequireDefault(require("./RelationshipTlsDomainTlsDomain"));

var _RelationshipTlsDomains = _interopRequireDefault(require("./RelationshipTlsDomains"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsSubscription model module.
 * @module model/RelationshipsForTlsSubscription
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsSubscription</code>.
   * @alias module:model/RelationshipsForTlsSubscription
   * @implements module:model/RelationshipTlsDomains
   * @implements module:model/RelationshipTlsCertificates
   */
  function RelationshipsForTlsSubscription() {
    _classCallCheck(this, RelationshipsForTlsSubscription);

    _RelationshipTlsDomains["default"].initialize(this);

    _RelationshipTlsCertificates["default"].initialize(this);

    RelationshipsForTlsSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsSubscription} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsSubscription} The populated <code>RelationshipsForTlsSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsSubscription();

        _RelationshipTlsDomains["default"].constructFromObject(data, obj);

        _RelationshipTlsCertificates["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('tls_domains')) {
          obj['tls_domains'] = _RelationshipTlsDomainTlsDomain["default"].constructFromObject(data['tls_domains']);
        }

        if (data.hasOwnProperty('tls_certificates')) {
          obj['tls_certificates'] = _RelationshipTlsCertificateTlsCertificate["default"].constructFromObject(data['tls_certificates']);
        }

        if (data.hasOwnProperty('tls_configuration')) {
          obj['tls_configuration'] = _RelationshipTlsConfigurationTlsConfiguration["default"].constructFromObject(data['tls_configuration']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsSubscription;
}();
/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domains
 */


RelationshipsForTlsSubscription.prototype['tls_domains'] = undefined;
/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificates
 */

RelationshipsForTlsSubscription.prototype['tls_certificates'] = undefined;
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */

RelationshipsForTlsSubscription.prototype['tls_configuration'] = undefined; // Implement RelationshipTlsDomains interface:

/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domains
 */

_RelationshipTlsDomains["default"].prototype['tls_domains'] = undefined; // Implement RelationshipTlsCertificates interface:

/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificates
 */

_RelationshipTlsCertificates["default"].prototype['tls_certificates'] = undefined;
var _default = RelationshipsForTlsSubscription;
exports["default"] = _default;