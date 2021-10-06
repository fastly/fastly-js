"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipCommonNameCommonName = _interopRequireDefault(require("./RelationshipCommonNameCommonName"));

var _RelationshipTlsActivationTlsActivation = _interopRequireDefault(require("./RelationshipTlsActivationTlsActivation"));

var _RelationshipTlsActivations = _interopRequireDefault(require("./RelationshipTlsActivations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForTlsPrivateKey model module.
 * @module model/RelationshipsForTlsPrivateKey
 * @version 3.0.0-alpha1
 */
var RelationshipsForTlsPrivateKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForTlsPrivateKey</code>.
   * @alias module:model/RelationshipsForTlsPrivateKey
   */
  function RelationshipsForTlsPrivateKey() {
    _classCallCheck(this, RelationshipsForTlsPrivateKey);

    RelationshipsForTlsPrivateKey.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForTlsPrivateKey, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForTlsPrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsPrivateKey} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsPrivateKey} The populated <code>RelationshipsForTlsPrivateKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForTlsPrivateKey();

        if (data.hasOwnProperty('tls_activations')) {
          obj['tls_activations'] = _RelationshipTlsActivationTlsActivation["default"].constructFromObject(data['tls_activations']);
        }

        if (data.hasOwnProperty('tls_domains')) {
          obj['tls_domains'] = _RelationshipCommonNameCommonName["default"].constructFromObject(data['tls_domains']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForTlsPrivateKey;
}();
/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activations
 */


RelationshipsForTlsPrivateKey.prototype['tls_activations'] = undefined;
/**
 * @member {module:model/RelationshipCommonNameCommonName} tls_domains
 */

RelationshipsForTlsPrivateKey.prototype['tls_domains'] = undefined;
var _default = RelationshipsForTlsPrivateKey;
exports["default"] = _default;