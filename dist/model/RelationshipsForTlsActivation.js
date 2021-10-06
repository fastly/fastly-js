"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipCommonNameCommonName = _interopRequireDefault(require("./RelationshipCommonNameCommonName"));

var _RelationshipTlsCertificate = _interopRequireDefault(require("./RelationshipTlsCertificate"));

var _RelationshipTlsCertificateTlsCertificate = _interopRequireDefault(require("./RelationshipTlsCertificateTlsCertificate"));

var _RelationshipTlsConfiguration = _interopRequireDefault(require("./RelationshipTlsConfiguration"));

var _RelationshipTlsConfigurationTlsConfiguration = _interopRequireDefault(require("./RelationshipTlsConfigurationTlsConfiguration"));

var _RelationshipTlsDomain = _interopRequireDefault(require("./RelationshipTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsActivation model module.
 * @module model/RelationshipsForTlsActivation
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsActivation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsActivation</code>.
   * @alias module:model/RelationshipsForTlsActivation
   */
  function RelationshipsForTlsActivation() {
    _classCallCheck(this, RelationshipsForTlsActivation);

    RelationshipsForTlsActivation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsActivation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsActivation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsActivation} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsActivation} The populated <code>RelationshipsForTlsActivation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsActivation();

        if (data.hasOwnProperty('tls_certificate')) {
          obj['tls_certificate'] = _RelationshipTlsCertificateTlsCertificate["default"].constructFromObject(data['tls_certificate']);
        }

        if (data.hasOwnProperty('tls_configuration')) {
          obj['tls_configuration'] = _RelationshipTlsConfigurationTlsConfiguration["default"].constructFromObject(data['tls_configuration']);
        }

        if (data.hasOwnProperty('tls_domain')) {
          obj['tls_domain'] = _RelationshipCommonNameCommonName["default"].constructFromObject(data['tls_domain']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsActivation;
}();
/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificate
 */


RelationshipsForTlsActivation.prototype['tls_certificate'] = undefined;
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */

RelationshipsForTlsActivation.prototype['tls_configuration'] = undefined;
/**
 * @member {module:model/RelationshipCommonNameCommonName} tls_domain
 */

RelationshipsForTlsActivation.prototype['tls_domain'] = undefined;
var _default = RelationshipsForTlsActivation;
exports["default"] = _default;